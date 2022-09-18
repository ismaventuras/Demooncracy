import { Button, Grid} from "@mui/material";
import { useRouter } from "next/router";
import MUILink from '../../Link';
import CouncilData from "./CouncilData";
import CouncilTimeline from "./CouncilTimeline";

export default function SingleTreasuryProposal({treasuryProposal}){
    const router = useRouter()
    const {network}  = router.query;
    return(
        <Grid container sx={{mt:4}}>
            <Grid item xs={12} marginLeft={2}>
                <Button variant='outlined' size='small'  LinkComponent={MUILink} href={`/${network}/treasury`}>Back to proposals</Button>
            </Grid>
            <Grid item xs={12} md={8}>
                {/* {pre_image && <ReferendumDescription pre_image={pre_image} />} */}
            </Grid>            
            <Grid item xs={12}>
                <CouncilData treasuryProposal={treasuryProposal}/>
            </Grid>
            <Grid item xs={12}>
                <CouncilTimeline timeline={treasuryProposal.timeline}/>
            </Grid>
        </Grid>
    )
    
}