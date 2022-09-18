// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
import { ethers } from "ethers";
import { getSingleProposal, getSingleReferenda } from "../../src/lib/subscan";

export default async function handler(req, res) { 
    if(req.method === 'POST'){
        // get values sent by client
        const {account, signedMsg, network ,section_id ,section_name, content}  = req.body;
        const referenda = await getSingleReferenda(network,section_id);
        const proposer = referenda.pre_image.author.address;

        if(!account || !signedMsg || !ethers.utils.isAddress(account)) res.status(400).json({'error': 'invalid account or signedmsg'});
        if(isNaN(section_id)) res.status(400).json({'error': 'not a valid section_id'});
        if(!proposer) res.status(500).json({'error':"can't get proposer"});
        
        // verify identity
        const verified = ethers.utils.verifyMessage(msg, signedMsg); 
        if(verified === proposer){
            // find if description for the item exists first
            let foundDescription = await prisma.description.findFirst({
                where: {
                    network,
                    section_id: Number(section_id),
                    section_name,                
                }
            })
            if(foundDescription){ // updated it if exists
                let updatedUser = await prisma.description.update({
                    where: {
                        id:foundDescription.id
                    },
                    data: {
                        content: content
                    }
                })
                res.status(200).json(updatedUser)
            }else { // if doesnt exist, then create it
                let createdDescription = await prisma.description.create({
                    data:{
                        content,
                        network,
                        section_id: Number(section_id),
                        section_name,            
                    },        
                });
                res.status(200).json(createdDescription)                
            }
        }
    }
    else if(req.method === 'GET'){
        const {network ,section_id ,section_name}  = req.query
        // find if description for the item exists first
        let foundDescription = await prisma.description.findFirst({
            where: {
                network,
                section_id: Number(section_id),
                section_name,                
            }
        });
        if(foundDescription) res.status(200).json(foundDescription);
        else res.status(404).json({error: "not found"});
    }
    // res.status(400).json({"message":"unsupported method"})
}
