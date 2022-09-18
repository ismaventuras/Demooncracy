import { Box,  Grid, Typography , Paper} from "@mui/material";


export default function TreasuryData({treasuryProposal}) {
    const { proposal_id, created_block, reward , status, proposer , beneficiary} = treasuryProposal

    return (
        <Box sx={{p:2}} display='flex' justifyContent={'center'}> 
        <Grid container  component={Paper} variant='outlined' elevation={0} sx={{p:4}}>
            <Grid item xs={12}>
                <Typography variant='h5' align='center'>
                    Treasury proposal data
                </Typography>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Proposal: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {proposal_id}
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
                <Box sx={{display:'flex', justifyContent:'space-between',flexWrap:"wrap"}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Proposer address: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {proposer.address}
                    </Typography>
                </Box>                                        
                <Box sx={{display:'flex', justifyContent:'space-between',flexWrap:"wrap"}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Reward: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {reward}
                    </Typography>
                </Box>                                        
                <Box sx={{display:'flex', justifyContent:'space-between',flexWrap:"wrap"}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Proposer display: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {proposer.display ? proposer.display : 'unknown'}
                    </Typography>
                </Box>                                        
                <Box sx={{display:'flex', justifyContent:'space-between',flexWrap:"wrap"}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Beneficiary address: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {beneficiary.address}
                    </Typography>
                </Box>                                        
                <Box sx={{display:'flex', justifyContent:'space-between',flexWrap:"wrap"}}>
                    <Typography variant={"h6"} component={'p'}>  
                    Beneficiary display: 
                    </Typography>
                    <Typography variant={"h6"} component={'span'} color='text.secondary'>  
                        {beneficiary.display ? proposer.display : 'unknown'}
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

            </Grid>
        </Grid>
    </Box>
    )
}