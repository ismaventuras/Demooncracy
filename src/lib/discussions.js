export const getSingleDiscussion =  async (discussion_id) => {
    try{
        let data = (await (await fetch(
            '/api/singleDiscussion' + new URLSearchParams({discussion_id}) 
        )).json())
        return data
    }catch(error){
        throw error
    }
}


export const createDiscussion =  async (account, signedContent, title, content) => {
    try{
        let data = (await (await fetch(
            '/api/createDiscussion', 
            {
                method:"POST", 
                headers:{
                    "Content-Type": "application/json"                        
                },
                body: JSON.stringify({account, signedContent, title, content})
            }
        )).json())
        return data
    }catch(error){
        throw error
    }
}


export const getAllDiscussion =  async () => {
    try{
        let data = (await (await fetch(
            '/api/allDiscussion',             
        )).json())
        return data
    }catch(error){
        throw error
    }
}