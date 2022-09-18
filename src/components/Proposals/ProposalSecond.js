import { Alert, Box, Button, CircularProgress, Grid , Paper, Typography} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { secondProposal } from "../../utils/governancePrecompileUtils";
import { networkNameByChain } from "../../utils/networks";



export default function ProposalSecond() {
    const { active, library, chainId } = useWeb3React();
    const router = useRouter()
    const {network, proposal_id} = router.query
    const [loading, setLoading] = useState(false);
    const [txHash, setTxHash] = useState("");;
    const [completed,setCompleted] = useState(false);
    const [error, setError] = useState("");
    const [userChain, setUserChain] = useState("")

    useEffect(()=> {
        setUserChain(networkNameByChain[chainId])
    },[chainId])

    const onClick = async (e) => {
        try{
            setCompleted(false);
            setError("");
            setLoading(true)
            let tx = await secondProposal(proposal_id,library.getSigner());        
            if(tx){
                let receipt = await tx.wait();  
                setCompleted(true);              
            }
        }catch(error){
            console.log(error)
            setError(error.message);
        }finally{
            setLoading(false)
        }
    }
    return(
        <Box sx={{p:2}} display='flex' justifyContent={'center'}>
            <Grid container maxWidth={1200} component={Paper} variant='outlined' elevation={0} sx={{p:4}} spacing={1}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h5' component='div'>
                        Second this proposal
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1' align='justify'>
                    To second a proposal means that you agree with it and want to back it up with your tokens to help it reach public referenda. The amount of tokens to be locked is equal to the proposer`s original deposit - no more, no less.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {loading ?
                        <CircularProgress />
                        :
                        <>
                            <Button disabled={!active || !(userChain === network)} onClick={onClick} variant='contained' size='small' color='secondary' fullWidth>                            
                                {(active && userChain === network) && 'Second'}
                                {!active && 'Connect Metamask'}      
                                {active && !(userChain === network) && 'Wrong metamask network'}                      
                            </Button>
                        </>
                    }
                </Grid>

                <Grid item xs={12}>
                    {txHash && <Alert severity={'info'}>Check your tx hash on block explorer</Alert>}
                    {completed && <Alert severity={'success'}>Transaccion has been completed!</Alert>}
                    {error && <Alert severity={'error'}>{error}</Alert>}
                </Grid>
            </Grid>
        </Box>
    )
}