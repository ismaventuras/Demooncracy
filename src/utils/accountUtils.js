import { ethers } from "ethers";
import {gasTokenByChain} from "./networks"
/**
 * pass an address and return a shortened version
 * @param {*} address 
 * @returns string (0x...defg)
 */
export const shortenAddress = address => `${address.substring(0, 6)}...${address.substring(address.length - 4)}`

export const balanceOf = async (address, provider) => {    
    // let chainList = {
    //     1284: 'GLMR',
    //     1285: 'MOVR',
    //     1287: 'DEV'
    // }
    try{
        let amountInBigInt = await provider.getBalance(address);
        let amount = ethers.utils.formatEther(amountInBigInt);
        let parsedAmount = parseFloat(amount).toFixed(4);
        let network = provider._network.chainId;
        return `${parsedAmount} ${gasTokenByChain[network]}`
    }catch(error){
        console.log(error)
        return 0
    }

}