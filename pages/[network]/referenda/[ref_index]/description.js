import { Box, Button, TextField, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { utils } from "ethers";
import { useRouter } from "next/router"
import { useState } from "react"

export default function Home(){
    const {library, active, account} = useWeb3React()
    const [value, setValue] = useState("")
    const router = useRouter();
    const {ref_index,network} = router.query

    const onClick = async (e) => {
        try {
            let signer = library.getSigner();
            let msg = `Hello! I'm ${account} , the proposer of this referenda.`
            let signedMsg = await signer.signMessage(msg)
            let verified = utils.verifyMessage(msg, signedMsg);
            if(verified === account){ // proposer instead of account 
                // create or update description
                let res = (await (await fetch(
                    '/api/referendumDescription', 
                    {
                        method:"POST", 
                        headers:{
                            "Content-Type": "application/json"                        
                        },
                        body: JSON.stringify({account, signedMsg, network: network, section_id: ref_index, section_name: "referenda", content: value})
                    }
                )).json())
                alert('description updated')
            }
            else{
                alert('wrong account');
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}  m={2} mt={12}>  
            <Typography variant='h6'>Edit description for  referendum {ref_index} </Typography>                  
            <TextField 
                variant="filled"
                label='description'
                type='text'                
                multiline
                rows={10}
                fullWidth
                sx={{maxWidth:800}}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button variant={'contained'} sx={{mt:2}} disabled={!active || !value} onClick={onClick}>Sign and update</Button>
        </Box>
    )
}