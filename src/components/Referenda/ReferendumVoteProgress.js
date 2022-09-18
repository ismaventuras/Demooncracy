import { Done, DoNotDisturb } from "@mui/icons-material"
import { Box, Chip, Typography } from "@mui/material"
import { ethers } from "ethers"

export default function ReferendumVoteProgress({referendum}){
    let {aye_without_conviction, aye_amount, nay_amount, nay_without_conviction, turnout, referendum_index} = referendum
    let formattedTurnout = ethers.utils.formatUnits(turnout, 'ether')
    let formattedAye = ethers.utils.formatUnits(aye_without_conviction, 'ether')
    let formattedNay = ethers.utils.formatUnits(nay_without_conviction, 'ether')
    let formattedAyeC = ethers.utils.formatUnits(aye_amount, 'ether')
    let formattedNayC = ethers.utils.formatUnits(nay_amount, 'ether')

    return(
        <Box align='center'>
            <Box>
                <Typography variant='overline'>Votes without conviction</Typography>
                <Box sx={{display:'flex', gap:2, justifyContent:'center'}}>
                    <Chip 
                        label={formattedAye}
                        color={'success'}
                        icon={<Done/>}
                    />
                    <Chip 
                        label={formattedNay}
                        color={'error'}
                        icon={<DoNotDisturb/>}
                    />            
                </Box>
            </Box>
            <Box>
                <Typography variant='overline'>Votes</Typography>
                <Box sx={{display:'flex', gap:2, justifyContent:'center'}}>
                    <Chip 
                        label={formattedAyeC}
                        color={'success'}
                        icon={<Done/>}
                    />
                    <Chip 
                        label={formattedNayC}
                        color={'error'}
                        icon={<DoNotDisturb/>}
                    />            
                </Box>
            </Box>
            <Box>
                <Typography variant='overline'>turnout</Typography>
                <Box sx={{display:'flex', gap:2, justifyContent:'center'}}>
                    <Chip 
                        label={formattedTurnout}
                        color={'warning'}
                        // icon={<Done/>}
                    />       
                </Box>
            </Box>
        </Box>
    )
}