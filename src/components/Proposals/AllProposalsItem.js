import { Button, Card, CardActions, CardContent,  Grid, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import MUILink from "../../Link";

export default function ProposalItem({ proposal}) {
    const { proposal_id, created_block, call_module, call_name, status, seconded_count } = proposal;
    const router = useRouter();
    const {network} = router.query
    
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
                        Seconded: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {seconded_count}
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
                        Call Module: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {call_module ? call_module : 'unknown'}
                        </Typography>
                    </Box>                                        
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography variant={"h6"} component={'p'}>  
                        Call Name: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {call_name ? call_name : 'unknown'}
                        </Typography>
                    </Box>                                        
                    
                    <CardActions>
                        <Button 
                            variant="contained" 
                            size="small" 
                            LinkComponent={MUILink} 
                            href={`/${network}/proposals/${proposal_id}`}
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