import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import {createDiscussion} from "../../lib/discussions";

const initialState = {title:"",content:""};

export default function CreateDiscussion(){
    const[state, setState] = useState(initialState);
    const {account, library, active} = useWeb3React();

    const handleChange = (e) => setState({...state,[e.target.name]:e.target.value})
    
    const onSubmit = async (e) => {
        e.preventDefault()
        let validForm = e.target.checkValidity()
        if(validForm){
            try{
                let signer = library.getSigner();
                let signedContent = await signer.signMessage(state.content)
                let ok = await createDiscussion(account, signedContent, state.title, state.content);
                console.log(ok);
            }catch(err){
                console.log(err);
            }
        }
    }

    return(
        <Container>
            <Grid container mt={2} spacing={2}>
                <Grid item xs={12}>
                    <Typography align='center' variant="h4">Create a discussion</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems='center' gap={2} component='form' onSubmit={onSubmit}>
                        <TextField 
                            variant="outlined"
                            type='text'
                            label='Title'
                            name='title'
                            value={state.title}
                            onChange={handleChange}                                                        
                            fullWidth
                            required
                            // inputProps={{maxLength: 64}}
                        />
                        <TextField 
                            variant="outlined"
                            type='text'
                            label='Content'
                            name='content'
                            value={state.content}
                            multiline
                            fullWidth
                            rows={20}
                            onChange={handleChange}
                            required
                        />
                        <Button variant='contained' size='small' type='submit' disabled={!active}>
                            
                            {active ? "Sign and create discussion" : "Connect your wallet"}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}