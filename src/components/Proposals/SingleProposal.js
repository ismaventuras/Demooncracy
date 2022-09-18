import { Button, Grid} from "@mui/material";
import ProposalDescription from "./ProposalDescription";
import ProposalData from "./ProposalData";
import ProposalPreimage from "./ProposalPreimage";
import ProposalTimeline from "./ProposalTimeline";
import ProposalSecond from "./ProposalSecond";
import MUILink from "../../Link";
import { useRouter } from "next/router";

export default function SingleProposal({proposal}){
    const { pre_image, timeline } = proposal
    const router = useRouter()
    const {network}  = router.query;
    return(
        <Grid container sx={{mt:4, mb:2}}>
            <Grid item xs={12} marginLeft={2}>
                <Button variant='outlined' size='small'  LinkComponent={MUILink} href={`/${network}/proposals`}>Back to proposals</Button>
            </Grid>
            <Grid item xs={12} md={8}>
                {pre_image && <ProposalDescription pre_image={pre_image} />}
            </Grid>
            <Grid item xs={12} md={4}>
                <ProposalSecond/>
            </Grid>
            <Grid item xs={12} md={12}>
                <ProposalData proposal={proposal} />
            </Grid>
            <Grid item xs={12} md={12}>
                {pre_image && <ProposalPreimage pre_image={pre_image} />}
            </Grid>
            <Grid item xs={12}>
                <ProposalTimeline timeline={timeline}/>
            </Grid>
        </Grid>
    )
}