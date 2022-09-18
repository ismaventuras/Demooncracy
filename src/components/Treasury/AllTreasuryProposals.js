import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AllTreasuryProposalsItem  from "./AllTreasuryProposalsItem";

export default function AllTreasuryProposals({treasuryProposals}){
    return(
        <Box display={'flex'} justifyContent="center" mt={4}>
            <Grid container sx={{}} spacing={3} maxWidth={1200}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h3' color={"text.secondary"}>Treasury</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                            {treasuryProposals && treasuryProposals.length > 0 ? treasuryProposals.map((proposal, index) => (
                                <AllTreasuryProposalsItem key={index} treasuryProposal={proposal}/>
                            )) : <Typography variant='h6'>no proposals</Typography>}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
