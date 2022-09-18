import { Button, Grid} from "@mui/material";
import { useRouter } from "next/router";
import MUILink from '../../Link';
import TechCommData from "./TechCommData";
import TechCommTimeline from "./TechCommTimeline";

export default function SingleTechCommProposal({techCommProposal}){
    const router = useRouter()
    const {network}  = router.query;
    return(
        <Grid container sx={{mt:4}}>
            <Grid item xs={12} marginLeft={2}>
                <Button variant='outlined' size='small'  LinkComponent={MUILink} href={`/${network}/techcomm`}>Back to proposals</Button>
            </Grid>
            <Grid item xs={12} md={8}>
                {/* {pre_image && <ReferendumDescription pre_image={pre_image} />} */}
            </Grid>            
            <Grid item xs={12}>
                <TechCommData techCommProposal={techCommProposal}/>
            </Grid>
            <Grid item xs={12}>
                <TechCommTimeline timeline={techCommProposal.timeline}/>
            </Grid>
        </Grid>
    )
    
}