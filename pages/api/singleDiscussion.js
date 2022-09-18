// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from "@prisma/client";
//import { ethers } from "ethers";
const prisma = new PrismaClient();

export default async function handler(req, res) { 
    let {discussion_id} = req.query
    if(req.method === 'GET'){
        let discussion = await prisma.discussion.findFirst({
            where:{
                id: Number(discussion_id)
            },
            select:{
                id:true,
                author: true,
                title: true,
                content: true,
                posts: true
            },
        })
        res.status(200).json(discussion);       
    }else{
        res.status(400).json({'error':'unsupported method'});
    }
}