import { useWeb3React } from "@web3-react/core"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";

export default function ReferendumDescription({ pre_image}){
    const {account} = useWeb3React()
    const [content,setContent] = useState("");
    const router = useRouter()
    const {network, ref_index} = router.query
    const authorAddress = pre_image.author.address

    useEffect(()=>{
        (async () => {
            let searchParams = new URLSearchParams({
                network: network, section_id: ref_index, section_name: "referenda"
            })
            let res = (await (await fetch(
                "/api/referendumDescription?" + searchParams ,                 
            )).json())
            if(res) setContent(res.content)
        })()
    },[])

    return(
        <Box sx={{p:2}}> 
            <Grid container component={Paper} variant='outlined' elevation={0} sx={{p:4}}>
                {account === authorAddress && 
                    <Grid item xs={12}>
                        <Link href={`/${network}/referenda/${ref_index}/description`}>
                            <Button variant='contained' size='small'>edit description</Button>
                        </Link>
                    </Grid>
                }
                <Grid item xs={12}>
                    <Typography variant='h4' align='center'>
                        Referendum #{ref_index}
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