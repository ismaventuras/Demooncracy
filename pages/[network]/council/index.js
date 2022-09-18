import AllCouncilProposals from "../../../src/components/Council/AllCouncilProposals";
import {getAllCouncil} from "../../../src/lib/subscan";

export default function Council({councilProposals}){    
    return <AllCouncilProposals councilProposals={councilProposals}/>
}




export async function getServerSideProps(context){
    const {network} = context.params
    let councilProposals = await getAllCouncil(network);
    return {
        props: {councilProposals},
    }
}