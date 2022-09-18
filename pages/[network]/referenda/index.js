import AllReferendaBox from '../../../src/components/Referenda/AllReferendaBox'
import { getAllReferenda } from "../../../src/lib/subscan";

export default function AllReferenda({ referenda, network }) {
    return <AllReferendaBox referenda={referenda} network={network} />
}



export async function getServerSideProps(context) {

    const { network } = context.params
    let referenda = await getAllReferenda(network);
    
    return {
        props: { referenda, network },
    }
}