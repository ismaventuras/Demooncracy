import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import MUILink from "../../Link";

export default function AllReferendaItem({ referendum}) {
    const { referendum_index, created_block, vote_threshold, call_module, call_name, status } = referendum;
    const router = useRouter();
    const {network} = router.query
    return (
        <Grid item xs={12} md={4} >
            <Card variant='elevation' elevation={12}>
            <CardContent>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography variant={"h5"} component={'p'}>  
                            Referendum: 
                        </Typography>
                        <Typography variant={"h5"} component={'span'} color='text.primary'>  
                            #{referendum_index}
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
                        Vote threshold
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {vote_threshold}
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
                            href={`/${network}/referenda/${referendum_index}`}
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