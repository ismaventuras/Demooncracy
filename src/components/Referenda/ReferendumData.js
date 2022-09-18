import { Box,  Grid, Typography , Paper} from "@mui/material";


export default function ReferendumData({referendum}) {
    const { status, created_block, updated_block, end , vote_threshold, delay , pre_image} = referendum

    return (
        <Box sx={{p:2}} display='flex' justifyContent={'center'}> 
        <Grid container  component={Paper} variant='outlined' elevation={0} sx={{p:4}}>
            <Grid item xs={12}>
                <Typography variant='h5' align='center'>
                    Referenda data
                </Typography>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Status: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {status}
                    </Typography>
                </Box>  
                <Box sx={{display:'flex', justifyContent:'space-between',flexWrap:"wrap"}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Vote Threshold: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {vote_threshold}
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
                    Block Updated: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {updated_block.toLocaleString('en-US')}
                    </Typography>
                </Box> 
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Delay: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {delay.toLocaleString('en-US')} blocks
                    </Typography>
                </Box> 
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Block end: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {end.toLocaleString('en-US')}
                    </Typography>
                </Box> 
            </Grid>
        </Grid>
    </Box>
    )
}