import {getAllProposals} from "../../../src/lib/subscan";
import AllProposalsBox from "../../../src/components/Proposals/AllProposalsBox";

export default function IndexProposals({proposals}){    
    if(!proposals){
        return(
            <p> no active proposals</p>
        )
    }
    return <AllProposalsBox proposals={proposals}/>
    
}



export async function getServerSideProps(context){
    const {network} = context.params

    let proposals = await getAllProposals(network);

    // if(allowedNetworks.indexOf(network) < 0) return {notFound: true}
    
    return { props: {proposals, network}, }
}