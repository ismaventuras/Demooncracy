import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import MUILink from "../../Link";
import {getAllDiscussion} from "../../lib/discussions";

export default function Discussion(){
    const [discussions, setDiscussions] = useState([]);
    useEffect(()=>{
        (async () => {
            let _discussions = await getAllDiscussion()
            setDiscussions(_discussions)
        })()
    },[])

    return(
        <Container>
            <Grid container mt={2} spacing={2}>
                <Grid item xs={12}>
                    <Typography align='center' variant="h4">Discussions</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                <Box display='flex' flexDirection='column' gap={2}>
                    {discussions.map((discussion, index) => (                        
                        <Paper sx={{p:3}} elevation={8} key={index} component={MUILink} href={`/discussion/${discussion.id}`} noLinkStyle>
                            <Box>
                                <Typography variant="h6">{discussion.title}</Typography>
                                <Typography variant="body2">Posted by {discussion.author}</Typography>
                                <Typography variant="subtitle2">{!discussion.posts ? 0 : discussion.posts.length} comments</Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* create discussion */}
                    <Button variant='contained' size='small' LinkComponent={MUILink} href={'/discussion/create'}>
                        Create discussion
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}