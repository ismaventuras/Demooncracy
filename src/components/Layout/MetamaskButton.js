import { Button } from "@mui/material"
import { useWeb3React } from "@web3-react/core"
import { shortenAddress } from "../../utils/accountUtils"
import { injected } from "../../utils/connectors"

export function MetamaskButton() {
    const { activate, active, account , deactivate} = useWeb3React()
    const onClickConnect = async () => {
        if (!active) {
            await activate(injected, err => {
                console.log(err)
                alert(err.message)                                
                deactivate()
            })
        }
    }
    return (
        <>
            <Button variant={active ? 'contained' : 'outlined'} color={active ? 'success' : 'inherit'} onClick={onClickConnect} size='small'>
                {active ? shortenAddress(account) : 'Connect'}
            </Button>
        </>
    )
}