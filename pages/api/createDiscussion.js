// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from "@prisma/client";
import { ethers } from "ethers";
const prisma = new PrismaClient();

export default async function handler(req, res) { 
    if(req.method === 'POST'){
        const {account, signedContent, title, content}  = req.body;

        // verify identity
        const verified = await ethers.utils.verifyMessage(content, signedContent); 
        if(verified === account){
            //create
            let created = await prisma.discussion.create({
                data: {
                    author: account,
                    content,
                    title                
                }
            })
            res.status(200).json(created);
        }else{
            res.status(400).json({'error':'content and signed content do not match'})
        }
    }else{
        res.status(400).json({'error':'unsupported method'});
    }
}