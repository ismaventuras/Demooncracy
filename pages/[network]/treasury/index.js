import AllTreasuryProposals from "../../../src/components/Treasury/AllTreasuryProposals";
import {getAllTreasury} from "../../../src/lib/subscan";

export default function Treasury({treasuryProposals}){    
    return <AllTreasuryProposals treasuryProposals={treasuryProposals}/>
}



export async function getServerSideProps(context){
    const {network} = context.params
    let treasuryProposals = await getAllTreasury(network);
   
    return {
        props: {treasuryProposals},
    }
}