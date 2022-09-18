import { Box, Grid, Typography } from "@mui/material";
import AllReferendaItem from "./AllReferendaItem";

export default function AllReferendaBox({ referenda, network }) {
    return (
        <Box display={'flex'} justifyContent="center" mt={4}>
            <Grid container sx={{}} spacing={3} maxWidth={1200}>
                <Grid item xs={12}>
                    <Typography align='center' variant='h3' color={"text.secondary"}>Referenda</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {referenda.length > 0 && referenda.map((referendum) => (
                            <AllReferendaItem key={referendum.referendum_index} referendum={referendum} network={network} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
