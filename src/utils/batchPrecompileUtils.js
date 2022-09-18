import {ethers} from "ethers";
import BatchABI from './abi/Batch.json';
const BatchAddress = "0x0000000000000000000000000000000000000808"


export async function batchTransactions(addressList, values, transactionsData, gasPrices, signer){
    try{
        const batchPrecompileContract = new ethers.Contract(BatchAddress,BatchABI,signer);
        const tx = await batchPrecompileContract.batchAll(addressList,values, transactionsData, gasPrices)
        return tx
    }catch(error){
        throw error
    }
}