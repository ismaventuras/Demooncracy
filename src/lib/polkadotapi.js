import {HttpProvider, ApiPromise} from '@polkadot/api';

const RPC_URLS = {
    "moonriver": "https://moonriver.public.blastapi.io",
    "moonbase": "https://moonbase-alpha.public.blastapi.io",
    "moonbeam": "https://moonbeam.public.blastapi.io"
}
export const getVotesOfAccount = async (network, account) => {
    try{
        let rpc = RPC_URLS[network]
        
        //if(!rpc) return `unsupported network ${network}`
        //if(!ethers.utils.isAddress(account)) return `not a valid address`;
    
        let provider = new HttpProvider(rpc);
        let api = await ApiPromise.create({provider});

        let response = await api.query.democracy.votingOf(account);
        let votesHuman = response.toHuman()
        let votesList = votesHuman.Direct.votes;
        let userVotes = []
        for(let voteItem of votesList){
            let ref_index = voteItem[0]
            let conviction = voteItem[1].Standard.vote.conviction
            let ayeOrNay = voteItem[1].Standard.vote.vote
            let lockedAmount = voteItem[1].Standard.balance.split(',').join('')
            userVotes.push({
                ref_index,conviction,ayeOrNay,lockedAmount
            })
        }
        return userVotes
    }catch(error){
        console.log(error)
        return []
    }
}