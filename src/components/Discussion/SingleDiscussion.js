import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import MUILink from "../../Link";

const createComment = async (discussion_id,account, signedContent, content) => {
    try{
        let data = (await (await fetch(
            '/api/createComment', 
            {
                method:"POST", 
                headers:{
                    "Content-Type": "application/json"                        
                },
                body: JSON.stringify({discussion_id,account, signedContent, content})
            }
        )).json())
        return data
    }catch(error){
        throw error
    }
}

function CommentForm({discussion_id}){
    const [comment, setComment] = useState("");
    const {active, library, account} = useWeb3React()
    const onSubmit = async (e) => {
        e.preventDefault();
        if(e.target.checkValidity()){
            try{
                let signer = library.getSigner();
                let signedContent = await signer.signMessage(comment)
                let ok = await createComment(discussion_id, account, signedContent, comment)
                console.log(ok);
            }catch(err){
                console.log(err);
            }
        }
    }
    return(
        <Grid item xs={12}>
            <Box component={"form"} onSubmit={onSubmit}>
                <TextField 
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}
                    type="text"
                    label="comment"
                    name="comment-form"
                    size='small'
                    variant={'filled'}
                    fullWidth
                    multiline
                    minRows={3}
                    required
                />
                <Button type="submit" disabled={!active} variant={active ? 'contained' : 'text'} sx={{mt:2}}>
                    {active ? 'post comment' : 'unlock your wallet to comment'}
                </Button>
            </Box>
        </Grid>
    )
}

export default function SingleDiscussion({discussion}){    
    const {id, author, content, title, posts} = discussion

    return(
        <Container sx={{mb:4}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{mt:4}}>
                    <Button LinkComponent={MUILink} href={"/discussion"}>Back to discussions</Button>
                </Grid>            
                <Grid item xs={12} sx={{mt:4}}>
                    <Typography align='center' variant={"h5"}>{title}</Typography>
                </Grid>            
                <Grid item xs={12} >
                    <Typography align='justify' variant={"body1"}>{content}</Typography>
                </Grid>            
                <Grid item xs={12}>
                    <Typography align='justify' variant={"body2"}>author: {author}</Typography>
                </Grid>            
                <Grid item xs={12} sx={{mx:"auto"}}>                    
                <Typography align='justify' variant={"h6"}>Comments</Typography>
                {posts && posts.length > 0 ? posts.map(comment => (
                    <Paper sx={{p:2}} key={comment.id}>                        
                        <Typography variant='h6' component={'div'}>#{comment.id}</Typography>
                        <Typography variant='body1'>{comment.content}</Typography>
                        <Typography variant='caption'>Posted by {comment.author}</Typography>
                    </Paper>
                )) : <Typography align='justify' variant={"body2"}>No comments</Typography> }                    
                </Grid>
                <Grid item xs={12} sx={{mx:"auto"}}>
                    <CommentForm discussion_id={id} />                    
                </Grid>
            </Grid>
        </Container>
    )
}
