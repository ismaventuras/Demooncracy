import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AllProposalsItem  from "./AllProposalsItem";

export default function AllProposalsBox({proposals}){
    return(
        <Box display={'flex'} justifyContent="center" mt={4}>
            <Grid container sx={{}} spacing={3} maxWidth={1200}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h3' color={"text.secondary"}>Proposals</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                            {proposals.length > 0 && proposals.map((proposal) => (
                                <AllProposalsItem key={proposal.proposal_id} proposal={proposal}/>
                            ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
