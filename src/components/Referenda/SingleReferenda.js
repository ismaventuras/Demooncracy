import { Button, Grid} from "@mui/material";
import { useRouter } from "next/router";
import ReferendumDescription from "./ReferendumDescription";
import ReferendumData from './ReferendumData'
import ReferendumPreimage from './ReferendumPreimage'
import ReferendumTimeline from './ReferendumTimeline'
import ReferendumVote from './ReferendumVote'
import MUILink from '../../Link';

export default function SingleReferenda({referendum}){
    const router = useRouter()
    const {network}  = router.query;
    const {pre_image, timeline} = referendum
    return(
        <Grid container sx={{mt:4}}>
            <Grid item xs={12} marginLeft={2}>
                <Button variant='outlined' size='small'  LinkComponent={MUILink} href={`/${network}/referenda`}>Back to referenda</Button>
            </Grid>
            <Grid item xs={12} md={8}>
                {pre_image && <ReferendumDescription pre_image={pre_image} />}
            </Grid>
            <Grid item xs={12} md={4}>
                <ReferendumVote referendum={referendum}/>
            </Grid>
            <Grid item xs={12}>
                <ReferendumData referendum={referendum}/>
            </Grid>
            <Grid item xs={12}>
                {pre_image && <ReferendumPreimage pre_image={pre_image} />}
            </Grid>
            <Grid item xs={12}>
                <ReferendumTimeline timeline={timeline}/>
            </Grid>
        </Grid>
    )
}