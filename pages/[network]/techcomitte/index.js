import AllTechCommProposals from "../../../src/components/TechComm/AllTechCommProposals";
import {getAllTechComm} from "../../../src/lib/subscan";

export default function Treasury({treasuryProposals}){    
    return <AllTechCommProposals treasuryProposals={treasuryProposals}/>
}



export async function getServerSideProps(context){
    const {network} = context.params
    let treasuryProposals = await getAllTechComm(network);
   
    return {
        props: {treasuryProposals},
    }
}