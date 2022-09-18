import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import BasicMenu from "./Menu";
import MuiLink from "../../Link";
import { MetamaskButton } from "./MetamaskButton";

// function MetamaskButton() {
//     const { activate, active, account } = useWeb3React()

//     const onClickConnect = async () => {
//         if (!active) {
//             await activate(injected, error => {
//                 alert(error)
//             })
//         }
//     }
//     return (
//         <div>
//             {!active ?
//                 <button onClick={onClickConnect} className='border p-1 border-orange-400 bg-orange-100'>
//                     {active ? shortenAddress(account) : "Connect Wallet"}
//                 </button>      
//             :
//                 <div className="flex gap-2 items-center">
//                     <button className='border p-1 border-green-400 bg-green-100'>
//                         {active ? shortenAddress(account) : "Connect Wallet"}
//                     </button>
//                     <BalanceBox/>
//                 </div>
//             }
//         </div>
//     )
// }


export default function Navbar() {

    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <MuiLink href="/" sx={{flexGrow:1}} noLinkStyle>
                    <Typography variant="h6" color="inherit" component="div">
                            Demooncracy
                    </Typography>
                    </MuiLink>
                    <Box sx={{display:'flex', gap:1}}>
                        <MetamaskButton />
                        <BasicMenu />
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>

    )
}
