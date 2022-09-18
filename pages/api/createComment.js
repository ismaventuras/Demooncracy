// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from "@prisma/client";
import { ethers } from "ethers";
const prisma = new PrismaClient();

export default async function handler(req, res) { 
    if(req.method === 'POST'){
        const {discussion_id,account, signedContent, content}  = req.body;

        // verify identity
        const verified = await ethers.utils.verifyMessage(content, signedContent); 
        if(verified === account){
            //create
            let created = await prisma.discussionPost.create({
                data:{
                    author: account,
                    content,
                    discussion_id,                    
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