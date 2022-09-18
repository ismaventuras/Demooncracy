
import { getSingleProposal } from "../../../../src/lib/subscan";
import SingleProposal from "../../../../src/components/Proposals/SingleProposal";

export default function Proposal({ proposal }) {
    return <SingleProposal proposal={proposal} />
}

export async function getServerSideProps(context) {
    
    const {proposal_id, network} = context.params
    
    let proposal = await getSingleProposal(network, proposal_id);
    if(!proposal){
        return {
            notFound: true
        }
    }
    return {
        props: { proposal},
    }
}