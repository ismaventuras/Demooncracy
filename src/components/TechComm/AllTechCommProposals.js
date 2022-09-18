import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AllTechCommProposalsItem  from "./AllTechCommProposalsItem";

export default function AllTechCommProposals({techCommProposals}){
    return(
        <Box display={'flex'} justifyContent="center" mt={4}>
            <Grid container sx={{}} spacing={3} maxWidth={1200}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h3' color={"text.secondary"}>TechComm</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                            {techCommProposals && techCommProposals.length > 0 ? techCommProposals.map((proposal, index) => (
                                <AllTechCommProposalsItem key={index} techCommProposal={proposal}/>
                            )) : <Typography variant='h6'>no proposals</Typography>}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
