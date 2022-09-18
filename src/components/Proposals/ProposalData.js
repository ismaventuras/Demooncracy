import { Box, Grid, Typography, Paper } from "@mui/material";

export default function ProposalData({proposal}){
    const { status, created_block, updated_block, seconded_count } = proposal;

    return(
        <Box sx={{p:2}} display='flex' justifyContent={'center'}> 
            <Grid container maxWidth={1200} component={Paper} variant='outlined' elevation={0} sx={{p:4}}>
                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>
                        Proposal data
                    </Typography>
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
                        Updated start: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {updated_block.toLocaleString('en-US')}
                        </Typography>
                    </Box> 
                </Grid>
            </Grid>
        </Box>
    )
}
