import DemocracyABI from './abi/Democracy.json';
import {ethers} from "ethers";

const DemocracyAddress = "0x0000000000000000000000000000000000000803";

export async function secondProposal(prop_index, signer){
    try{
        const contract = new ethers.Contract(DemocracyAddress,DemocracyABI,signer);
        let tx = await contract.second(prop_index, 1);        
        return tx
    }catch(error){
        throw error
    }
}
export async function voteReferendum(ref_index, aye, vote_amount, conviction, signer){
    try{
        const contract = new ethers.Contract(DemocracyAddress,DemocracyABI,signer);
        let tx = await contract.standard_vote(ref_index, aye, vote_amount, conviction);        
        return tx
    }catch(error){
        throw error
    }
}