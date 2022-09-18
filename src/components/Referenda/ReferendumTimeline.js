import { Grid, Typography , Paper, List, ListItemText} from "@mui/material";
import { Box } from "@mui/system";

export default function ReferendumTimeline({ timeline }) {
    return (
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Grid container maxWidth={1000} component={Paper} elevation={0} variant='outlined' p={2}>
                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>Timeline</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} >
                        {timeline.map((timelineItem, index) => (
                            <Grid item xs={12} key={index}  sx={{display:'flex', justifyContent:'space-evenly'}}>
                                <List  sx={{display:'flex', gap:4}}>
                                    <ListItemText
                                        primary={timelineItem.status}
                                        secondary={'Status'}
                                    />
                                    <ListItemText
                                        primary={timelineItem.block}
                                        secondary={'block'}
                                    />
                                    <ListItemText
                                        primary={(new Date(timelineItem.time * 1000)).toDateString()}
                                        secondary={'Date'}
                                    />
                                </List>

                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}