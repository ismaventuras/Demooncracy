
import {getSingleReferenda} from "../../../../src/lib/subscan";
import SingleReferenda from "../../../../src/components/Referenda/SingleReferenda";


export default function Referendum({referendum}) {
    return <SingleReferenda referendum={referendum} />
}

export async function getServerSideProps(context){
    let {ref_index,network} = context.params;
    let referendum = await getSingleReferenda(network, ref_index);
    if(!referendum) return {notFound: true}

    return {
        props: {referendum},
    }
}