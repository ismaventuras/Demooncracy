import { Button, Card, CardActions, CardContent, Container, Divider, Grid, ListItem, ListItemButton, ListItemText , Paper, Typography} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import MUILink from "../../Link";
import {ethers} from 'ethers';

export default function TreasuryProposalItem({ treasuryProposal}) {
    //const { proposal_id, created_block, call_module, call_name, status, seconded_count } = proposal;
    const router = useRouter();
    const {network} = router.query

    const {proposal_id, created_block, status,
        reward, reward_extra,
        beneficiary,
        proposer,
    } = treasuryProposal

    return (    
        <Grid item xs={12} md={4} >            
            <Card variant='elevation' elevation={12}>
                <CardContent>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography variant={"h5"} component={'p'}>  
                            Proposal: 
                        </Typography>
                        <Typography variant={"h5"} component={'span'} color='text.primary'>  
                            #{proposal_id}
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography variant={"h6"} component={'p'}>  
                        Status: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {status}
                        </Typography>
                    </Box>                                                                               
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography variant={"h6"} component={'p'}>  
                        Block start: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {created_block.toLocaleString('en-US')}
                        </Typography>
                    </Box>                                        
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography variant={"h6"} component={'p'}>  
                        Reward:
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {reward && ethers.utils.formatUnits(reward, 'ether')}
                        </Typography>
                    </Box>                                        
                    <CardActions>
                        <Button 
                            variant="contained" 
                            size="small" 
                            LinkComponent={MUILink} 
                            href={`/${network}/treasury/${proposal_id}`}
                            fullWidth
                        >
                            Open
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>            
        </Grid>
    )
}