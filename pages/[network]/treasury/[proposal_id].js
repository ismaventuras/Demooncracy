
import {getSingleTreasury} from "../../../src/lib/subscan";
import SingleTreasuryProposal from "../../../src/components/Treasury/SingleTreasuryProposal";


export default function TreasuryProposal({treasuryProposal}) {
    return <SingleTreasuryProposal treasuryProposal={treasuryProposal}/>            
}

export async function getServerSideProps(context){
    const {ref_index, network} = context.params
    let treasuryProposal = await getSingleTreasury(network, ref_index);
    return {
        props: {treasuryProposal},
    }
}