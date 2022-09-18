import { Paper, Box, Grid, Button, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function ProposalDescription({pre_image}){    
    const { account } = useWeb3React()
    const [content,setContent] = useState("");    
    const router = useRouter()
    const {network, proposal_id} = router.query

    const authorAddress = pre_image.author.address
    
    useEffect(()=>{
        (async () => {
            let searchParams = new URLSearchParams({
                network: network, section_id: proposal_id, section_name: "proposals"
            })
            let res = (await (await fetch(
                "/api/proposalDescription?" + searchParams ,                 
            )).json())
            if(res) setContent(res.content)
        })()
    },[])

    return(
        <Box sx={{p:2}}> 
            <Grid container component={Paper} variant='outlined' elevation={0} sx={{p:4}}>
                {account === authorAddress && 
                    <Grid item xs={12}>
                        <Link href={`/${network}/proposals/${proposal_id}/description`}>
                            <Button variant='contained' size='small'>edit description</Button>
                        </Link>
                    </Grid>
                }
                <Grid item xs={12}>
                    <Typography variant='h4' align='center'>
                        Proposal #{proposal_id}
                    </Typography>
                    {content ? 
                    <Typography variant='h6'>
                        {content}
                    </Typography>
                    :
                    <Typography variant='h6' align='justify'>
                        This is a proposal whose proposer address ({authorAddress}) is shown in on-chain info below. Only this user can edit this description and the title. If you own this account, login and tell us more about your proposal.        
                    </Typography>
                    }
                </Grid>
            </Grid>                       
        </Box>       
    )
}