import { Alert, Box, Button, Chip, CircularProgress, Grid, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { voteReferendum } from "../../utils/governancePrecompileUtils";
import { networkNameByChain , convictions} from "../../utils/networks";
import { ethers } from "ethers";
import ReferendumVoteProgress from "./ReferendumVoteProgress";



function ReferendumVoteForm({formState, setformState}){
    const router = useRouter()
    const { network, ref_index } = router.query
    const CONVICTION_VALUES = convictions[network];

    return(
        <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
        <TextField 
            value={formState.lockBalance}
            onChange={(e)=> setformState({...formState,lockBalance:e.target.value})}
            label='Lock balance'
            type={'number'}
            InputProps={{min: 0.01, step:0.01}}
            autoComplete={'off'}
        />
        <Select
            value={formState.conviction}
            label={""}
            onChange={(e)=> setformState({...formState, conviction:e.target.value})}
        >
            {CONVICTION_VALUES.map(convictionValue => (
                <MenuItem key={convictionValue.value} value={convictionValue.value}>{convictionValue.text}</MenuItem>
            ))}
        </Select>
    </Box>
    )
}

export default function ReferendumVote({ referendum }) {
    const { active, library, chainId } = useWeb3React();
    const router = useRouter()
    const { network, ref_index } = router.query
    const [loading, setLoading] = useState(false);
    const [txHash, setTxHash] = useState("");;
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState("");
    const [formState, setformState] = useState({conviction:0,lockBalance:""})
    const [userChain, setUserChain] = useState("")

    useEffect(()=> {
        setUserChain(networkNameByChain[chainId])
    },[chainId])

    const isValidForm = () => {
        if(lockBalance <= 0) return false
        if(conviction < 0 || conviction > 5) return false
        return true
    }
    const resetForm = () => {
        setError("");
        setTxHash("");
        setCompleted(false)
    }
    
    const onClickVote = async(e) => {
        try{
            if(!isValidForm) {
                alert("you need to fill the form")
                return
            }
            resetForm();
            setLoading(true)
            let yayOrNay = e.target.name === "yay" ? true : false;
            let voteAmount = ethers.utils.parseEther(formState.lockBalance);
            let tx = await voteReferendum(ref_index, yayOrNay, voteAmount, formState.conviction,library.getSigner());
            setTxHash(tx.hash);
            let receipt = await tx.wait();
            setCompleted(true);
        }catch(err){
            setError(err.message);
            console.log(err);
        }finally{
            setLoading(false)
        }
    }
    return (
        <Box sx={{ p: 2 }} display='flex' justifyContent={'center'}>
            <Grid container maxWidth={1200} component={Paper} variant='outlined' elevation={0} sx={{ p: 4 }} spacing={1}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h5' component='div'>
                        Vote this proposal
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ReferendumVoteProgress referendum={referendum} />
                </Grid>
                <Grid item xs={12}>
                    <ReferendumVoteForm formState={formState} setformState={setformState}/>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{display:'flex', gap:2, justifyContent:'center'}}>
                    {loading ?
                        <CircularProgress />
                        :
                        <>
                            <Button disabled={!active || formState.lockBalance <=0 || !(userChain === network)} onClick={onClickVote} name="aye" variant='contained' size='small' color='success'>                            
                                {(active && userChain === network) && 'Vote Aye'}
                                {!active && 'Connect Metamask'}      
                                {!(userChain === network) && 'Wrong metamask network'}                      
                            </Button>
                            <Button disabled={!active || formState.lockBalance <=0 || !(userChain === network)} onClick={onClickVote} name="nay" variant='contained' size='small' color='error'>
                                {(active && userChain === network) && 'Vote Nay'}
                                {!active && 'Connect Metamask'}      
                                {!(userChain === network) && 'Wrong metamask network'}    
                            </Button>
                        </>
                    }
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{display:'flex',flexWrap:'wrap', justifyContent:'center', gap:1}}>
                    {txHash && <Alert severity={'info'}>Check your tx hash on block explorer</Alert>}
                    {completed && <Alert severity={'success'}>Transaccion has been completed!</Alert>}
                    {error && <Alert sx={{maxWidth:"240px"}} severity={'error'}>{error}</Alert>}
                </Grid>
            </Grid>
        </Box>
    )
}