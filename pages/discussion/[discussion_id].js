import SingleDiscussion from "../../src/components/Discussion/SingleDiscussion";

export default function Index({discussion}){        
    return <SingleDiscussion discussion={discussion} />
}

export async function getServerSideProps(context){
    const {discussion_id} = context.params

    const getSingleDiscussion =  async (discussion_id) => {
        try{
            let data = (await (await fetch(
                'http:/localhost:3000/api/singleDiscussion?' + new URLSearchParams({discussion_id}) 
            )).json())
            return data
        }catch(error){
            throw error
        }
    }
    let discussion = await getSingleDiscussion(discussion_id)

    if(!discussion) return {notFound: true}
    
    return { props: {discussion}, }
}
