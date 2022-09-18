// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from "@prisma/client";
//import { ethers } from "ethers";
const prisma = new PrismaClient();

export default async function handler(req, res) { 
    if(req.method === 'GET'){
        // verify identity
        let discussions = await prisma.discussion.findMany({
            select:{
                id:true,
                author: true,
                title: true,
                posts: true
            }
        })
        res.status(200).json(discussions);       
    }else{
        res.status(400).json({'error':'unsupported method'});
    }
}