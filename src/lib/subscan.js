const SUBSCAN_API_KEY = "9f800552f6dc3e100e56ceb6943e76d5";

export async function getAllReferenda(network){
    let uri = `https://${network}.api.subscan.io/api/scan/democracy/referendums`;
    let row = 100;    
    let initialPage = 0;
    let itemsList = []
    async function fetchPage(page){
        try{
            let subscanResponse = await fetch(
                uri,
                {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json',
                        'X-API-KEY': SUBSCAN_API_KEY
                    },
                    body: JSON.stringify({page, row})
                }
            );
            let referenda = await subscanResponse.json();
            let {count, list} = referenda.data
            return {count, list}
        }catch(error){
            console.log(error);
        }
    }
    try{
        // iterate
                
        let {count, list} = await fetchPage(initialPage);
        if(count === 0) return null
        itemsList.push(...list);        
        let totalItems = count;
        let cursor = list.length
        while(cursor < totalItems){
            initialPage++
            let result = await fetchPage(initialPage);
            itemsList.push(...result.list);
            cursor+=100;            
        }
        return itemsList
    }catch(err){
        console.log(err)
    }
}

export async function getSingleReferenda(network, referendum_index){
    let uri = `https://${network}.api.subscan.io/api/scan/democracy/referendum`;
    try{
        let subscanResponse = await fetch(
            uri,
            {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'X-API-KEY': SUBSCAN_API_KEY
                },
                body: JSON.stringify({referendum_index: Number(referendum_index)})
            }
        );
        let referendum = await subscanResponse.json();
        return referendum.data.info
    }catch(error){
        //console.log(error);
    }
}

export async function getAllTreasury(network){
    let uri = `https://${network}.api.subscan.io/api/scan/treasury/proposals`;
    let row = 100;    
    let initialPage = 0;
    let itemsList = []
    async function fetchPage(page){
        try{
            let subscanResponse = await fetch(
                uri,
                {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json',
                        'X-API-KEY': SUBSCAN_API_KEY
                    },
                    body: JSON.stringify({page, row})
                }
            );
            let referenda = await subscanResponse.json();
            let {count, list} = referenda.data
            return {count, list}
        }catch(error){
            console.log(error);
        }
    }
    try{
        // iterate
                
        let {count, list} = await fetchPage(initialPage);
        if(count === 0) return null
        itemsList.push(...list);        
        let totalItems = count;
        let cursor = list.length
        while(cursor < totalItems){
            initialPage++
            let result = await fetchPage(initialPage);
            itemsList.push(...result.list);
            cursor+=100;            
        }
        return itemsList
    }catch(err){
        console.log(err)
    }  
}

export async function getSingleTreasury(network, proposal_id){
    let uri = `https://${network}.api.subscan.io/api/scan/treasury/proposal`;
    try{
        let subscanResponse = await fetch(
            uri,
            {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'X-API-KEY': SUBSCAN_API_KEY
                },
                body: JSON.stringify({proposal_id: Number(proposal_id)})
            }
        );
        let treasuryProposal = await subscanResponse.json();
        return treasuryProposal.data.info
    }catch(error){
        console.log(error);
    }
}

export async function getAllProposals(network){
    let uri = `https://${network}.api.subscan.io/api/scan/democracy/proposals`;
    let row = 100;    
    let initialPage = 0;
    let itemsList = []
    async function fetchPage(page){
        try{
            let subscanResponse = await fetch(
                uri,
                {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json',
                        'X-API-KEY': SUBSCAN_API_KEY
                    },
                    body: JSON.stringify({page, row})
                }
            );
            let referenda = await subscanResponse.json();
            let {count, list} = referenda.data
            return {count, list}
        }catch(error){
            console.log(error);
        }
    }
    try{
        // iterate
                
        let {count, list} = await fetchPage(initialPage);
        if(count === 0) return null
        itemsList.push(...list);        
        let totalItems = count;
        let cursor = list.length
        while(cursor < totalItems){
            initialPage++
            let result = await fetchPage(initialPage);
            itemsList.push(...result.list);
            cursor+=100;            
        }
        return itemsList
    }catch(err){
        console.log(err)
    }  
}
export async function getSingleProposal(network, democracy_id){
    let uri = `https://${network}.api.subscan.io/api/scan/democracy/proposal`;
    try{
        let subscanResponse = await fetch(
            uri,
            {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'X-API-KEY': SUBSCAN_API_KEY
                },
                body: JSON.stringify({democracy_id: Number(democracy_id)})
            }
        );
        let response = await subscanResponse.json();
        return response.data.info
    }catch(error){
        console.log(error);
        return false
    } 
}

export async function getAllTechComm(network){
    let uri = `https://${network}.api.subscan.io/api/scan/techcomm/proposals`;
    let row = 100;    
    let initialPage = 0;
    let itemsList = []
    async function fetchPage(page){
        try{
            let subscanResponse = await fetch(
                uri,
                {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json',
                        'X-API-KEY': SUBSCAN_API_KEY
                    },
                    body: JSON.stringify({page, row})
                }
            );
            let referenda = await subscanResponse.json();
            let {count, list} = referenda.data
            return {count, list}
        }catch(error){
            console.log(error);
        }
    }
    try{
        // iterate                
        let {count, list} = await fetchPage(initialPage);
        if(count === 0) return null
        itemsList.push(...list);        
        let totalItems = count;
        let cursor = list.length
        while(cursor < totalItems){
            initialPage++
            let result = await fetchPage(initialPage);
            itemsList.push(...result.list);
            cursor+=100;            
        }
        return itemsList
        
    }catch(err){
        console.log(err)
    }
}
export async function getAllCouncil(network){
    let uri = `https://${network}.api.subscan.io/api/scan/council/proposals`;
    let row = 100;    
    let initialPage = 0;
    let itemsList = []
    async function fetchPage(page){
        try{
            let subscanResponse = await fetch(
                uri,
                {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json',
                        'X-API-KEY': SUBSCAN_API_KEY
                    },
                    body: JSON.stringify({page, row})
                }
            );
            let referenda = await subscanResponse.json();
            let {count, list} = referenda.data
            return {count, list}
        }catch(error){
            console.log(error);
        }
    }
    try{
        // iterate                
        let {count, list} = await fetchPage(initialPage);
        if(count === 0) return null
        itemsList.push(...list);        
        let totalItems = count;
        let cursor = list.length
        while(cursor < totalItems){
            initialPage++
            let result = await fetchPage(initialPage);
            itemsList.push(...result.list);
            cursor+=100;            
        }
        return itemsList
        
    }catch(err){
        console.log(err)
    }
}
