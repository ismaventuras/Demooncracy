import { Grid } from "@mui/material";
import {Hero} from './Hero'
import {NetworkList} from './NetworkList'


export default function IndexHome() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Hero />
            </Grid>
            <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
                <NetworkList />
            </Grid>
        </Grid>
    )
}