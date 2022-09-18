import {useWeb3React} from '@web3-react/core';
import {injected} from "../../utils/connectors";
import {shortenAddress, balanceOf} from "../../utils/accountUtils"

import { useEffect, useState } from "react";

export function BalanceBox(){
    const {library, active, account} = useWeb3React();
    const [balance, setBalance] = useState(null);
    useEffect(()=> {
        (
            async () => {
                    let x = await balanceOf(account, library);
                    setBalance(x)
            }
        )()
    },[library, account])

    return(
        <p>{balance}</p>
    )
}

export function ConnectButton(){
    const {activate, active} = useWeb3React();

    const onClick = async (e) => {
        await activate(injected);
    }
    return(
        <div className="flex justify-center">
            <button className="border-2 p-5 border-orange-400 rounded-sm bg-orange-200 font-bold text-pink-800" onClick={onClick}> 
                Connect your wallet using Metamask
            </button>
        </div>
    )
}

export function AccountInfo(){
    const {library, active, account} = useWeb3React();
    const [balance, setBalance] = useState(null);

    useEffect(()=> {
        (
            async () => {
                    let x = await balanceOf(account, library);
                    setBalance(x)
            }
        )()
    },[library, account])

    return(
        <div className='flex justify-around w-full flex-col items-center '>
            <div>
                <p className='text-xl'>Selected account:</p>
                <p className='text-gray-600 break-all text-center'>{shortenAddress(account)}</p>
            </div>
            <div> 
                <p className='text-xl'>balance:</p>
                <p className='text-gray-600'>{balance ? balance : 'loading...' }</p>
            </div>
        </div>
    )
}