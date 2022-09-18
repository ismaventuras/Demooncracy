import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { getVotesOfAccount } from "../../../src/lib/polkadotapi";
import { ethers } from "ethers";
import DemocracyABI from '../../../src/utils/abi/Democracy.json';
import { batchTransactions } from "../../../src/utils/batchPrecompileUtils";
import { useRouter } from "next/router";
import { Alert, Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { networkNameByChain } from "../../../src/utils/networks";

const DemocracyAddress = "0x0000000000000000000000000000000000000803";


export default function DemocracyLocks() {
    const router = useRouter()
    const {network} = router.query
    const { active, account, library, chainId } = useWeb3React();
    const [votes, setVotes] = useState([])    
    const [loading, setLoading] = useState(false);
    const [txHash, setTxHash] = useState("");;
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState("");
    // const [userChain, setUserChain] = useState("")

    // useEffect(()=> {
    //     setUserChain(networkNameByChain[chainId])
    // },[chainId])

    useEffect(() => {
        (
            async () => {
                if (active && library) {
                    let response = await getVotesOfAccount(network, account);
                    setVotes(response);
                }
            }
        )()
    }, [active])


    const onUnlockClick = async (e) => {
        const ref_index = e.target.name;

        try {
            setCompleted(false)
            setError("")
            setTxHash("")
            setLoading(true);
            const democracyPrecompileContract = new ethers.Contract(DemocracyAddress, DemocracyABI, library.getSigner());
            let removeVotePopulatedTx = (await democracyPrecompileContract.populateTransaction.remove_vote(ref_index)).data;
            let unlockPopulatedTx = (await democracyPrecompileContract.populateTransaction.unlock(account)).data;
            let tx = await batchTransactions(
                [DemocracyAddress, DemocracyAddress], //address lsit
                [], //msg.value
                [removeVotePopulatedTx, unlockPopulatedTx], //msg.data
                [], // gasPrice
                library.getSigner() //signer
            );
            setTxHash(tx.hash)
            let receipt = await tx.wait()
            setCompleted(true)            
        } catch (error) {            
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }

    return (
        <Grid container mt={8} spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" align='center' color={'text.secondary'} textTransform={'uppercase'}>{network} locks</Typography>
            </Grid>
            <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
                <Box maxWidth={1000}>
                    <Typography variant="body1" align='justify'>When you vote for a Governance referendum, your tokens are locked at least while the referendum is up for vote. </Typography>
                    <Typography variant="body1" align='justify'>Once the referendum ends, the lock may expire or it may remain for a longer period, depending on your conviction and whether you voted with the winning side or not.
    But regardless of the lock period, the lock will expire eventually and once that happens you need to manually remove it in order to make the locked balance transferable again. The lock isnt removed automatically.</Typography>
                </Box>
            </Grid>
            {
            !active ? <Grid mt={4} item xs={12}><Typography align='center' variant='h5' color='secondary'>connect your wallet using the top right button</Typography></Grid>:                
                <>
                    <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
                        <Box sx={{display:'flex', justifyContent:'center', gap:3,marginTop:2, flexWrap:'wrap'}}>
                            {votes.length > 0 ?
                                votes.map((vote) => (
                                    <Paper sx={{p:2, minWidth:250}} key={vote.ref_index}>
                                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                            <Typography variant='overline' >Referendum </Typography>
                                            <Typography variant='overline' ># {vote.ref_index}</Typography>
                                        </Box>
                                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                            <Typography variant='overline' >Conviction </Typography>
                                            <Typography variant='overline' >{vote.conviction}</Typography>
                                        </Box>
                                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                            <Typography variant='overline' >Locked amount </Typography>
                                            <Typography variant='overline' >{ethers.utils.formatEther(vote.lockedAmount)}</Typography>
                                        </Box>
                                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                            <Typography variant='overline' >Vote </Typography>
                                            <Typography variant='overline' >{vote.ayeOrNay}</Typography>
                                        </Box>
                                        {/* <UnlockTokensButton ref_index={vote.ref_index} /> */}
                                        <Button disabled={loading} name={vote.ref_index} variant={'contained'} size={'small'} onClick={onUnlockClick}>{loading ? "Waiting for confirmation" :"Unlock tokens" }</Button>
                                    </Paper>
                                )) : <Typography variant="h6">no democracy locks</Typography>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{display:'flex',flexDirection:'column', alignItems:'center'}}>                            
                        {txHash && <Alert severity={'info'}>Check your tx hash on block explorer</Alert>}
                        {completed && <Alert severity={'success'}>Transaccion has been completed!</Alert>}
                        {error && <Alert sx={{maxWidth:"240px"}} severity={'error'}>{error}</Alert>}
                    </Grid>
                    </>
            }
        </Grid>
    )
}