import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AllCouncilProposalsItem  from "./AllCouncilProposalsItem";

export default function AllCouncilProposals({councilProposals}){
    return(
        <Box display={'flex'} justifyContent="center" mt={4}>
            <Grid container sx={{}} spacing={3} maxWidth={1200}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h3' color={"text.secondary"}>council</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                            {councilProposals && councilProposals.length > 0 ? councilProposals.map((proposal, index) => (
                                <AllCouncilProposalsItem key={index} councilProposal={proposal}/>
                            )) : <Typography variant='h6'>no proposals</Typography>}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
