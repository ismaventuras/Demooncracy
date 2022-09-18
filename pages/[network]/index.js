import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MUILink from "../../src/Link"


export default function NetworkHome() {
    const router = useRouter()
    const { network } = router.query
    const allowedNetworks = ['moonbase', 'moonbeam', 'moonriver']
    if (!allowedNetworks.includes(network)) return (
        <div>
            <p>unsupported network</p>
        </div>
    )

    const ITEMS_LIST = [
        {
            'image': '/icons/proposal.png',
            'title': 'Proposals',
            'link': `/${network}/proposals`
        },
        {
            'image': '/icons/referendum.png',
            'title': 'Referenda',
            'link': `/${network}/referenda`
        },
        {
            'image': '/icons/treasury.png',
            'title': 'Treasury',
            'link': `/${network}/treasury`
        },
        {
            'image': '/icons/council.png',
            'title': 'Council',
            'link': `/${network}/council`
        },
        {
            'image': '/icons/tech_committe.png',
            'title': 'Tech. Committe',
            'link': `/${network}/techcomitte`
        },
        {
            'image': '/icons/padlock.png',
            'title': 'Democracy locks',
            'link': `/${network}/democracylocks`
        },
    ]
    return (
        <Grid container sx={{ mt: { xs: 2, md: 8 } }} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h3" align="center" color="text.secondary" sx={{textShadow:"1px 1px 2px gray"}} textTransform={'uppercase'} gutterBottom>
                    {network}
                </Typography>
            </Grid>
            {ITEMS_LIST.map(item => (
                <Grid item xs={12} md={4} key={item.title}>
                    <MUILink href={item.link} noLinkStyle component="div" sx={{ display: "flex", justifyContent: "center" }}>
                        <Paper sx={{ width: '250px', p: 2 }} elevation={12}>
                            <Box key={item.title} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                <Image
                                    alt="img"
                                    src={item.image}
                                    width={82}
                                    height={82}
                                />
                                <Typography variant='h5' color="text.secondary" >{item.title}</Typography>
                            </Box>
                        </Paper>
                    </MUILink>
                </Grid>
            ))}
        </Grid>
    )
}