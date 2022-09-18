import { Box, Grid, Typography, Paper, TextField } from "@mui/material";

export default function ProposalPreimage({pre_image}){

    return(
        <Box sx={{p:2}} display='flex' justifyContent={'center'}> 
            <Grid container  component={Paper} variant='outlined' elevation={0} sx={{p:4}}>
                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>
                    Preimage info
                    </Typography>
                    <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                        <Typography variant={"h6"} component={'p'}>  
                        Author address: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary' sx={{wordWrap:'break-word'}}>  
                            {pre_image.author.address}
                        </Typography>
                    </Box>  
                    <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                        <Typography variant={"h6"} component={'p'}>  
                        Author display name: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {pre_image.author.display ? pre_image.author.display : "unknown"}
                        </Typography>
                    </Box>                                        
                    <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}} textOverflow={'clip'}>
                        <Typography variant={"h6"} component={'p'}>  
                        Proposal hash: 
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary' style={{ wordWrap: "break-word" }}>  
                            {pre_image.hash}
                        </Typography>
                    </Box> 
                    <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                        <Typography variant={"h6"} component={'p'}>  
                        Call module
                        </Typography>
                        <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                            {pre_image.call_module}
                        </Typography>
                    </Box> 
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography variant={"h6"} component={'p'}>  
                        Params
                        </Typography>
                        <TextField 
                            label="params"
                            multiline
                            value={pre_image.params}
                            sx={{textOverflow:"auto"}}
                            maxRows={5}
                        />
                    </Box> 
                </Grid>
            </Grid>
        </Box>
    )
}
