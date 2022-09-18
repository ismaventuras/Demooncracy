import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import MUILink from "../../Link"

const NETWORKS = [
    {
        "name": "moonriver",
        "logo": "logos/moonriver.png",
        "boxShadow": "1px 1px 12px yellow",
        "color": "yellow"
    },
    {
        "name": "moonbeam",
        "logo": "logos/moonbeam.png",
        "boxShadow": "1px 1px 12px purple",
        "color": "purple"
    },
    {
        "name": "moonbase",
        "logo": "logos/moonbase.png",
        "boxShadow": "1px 1px 12px pink",
        "color": "pink"
    },
    {
        "name": "discussion",
        "logo": "logos/conversation.png",
        "boxShadow": "1px 1px 12px brown",
        "color": "brown"
    }
]

export function NetworkList() {
    return (
        <List dense sx={{ display: "flex", flexWrap: { sx: "wrap", sm: "unwrap" }, justifyContent: "center", gap: 2 }}>
            {
                NETWORKS.map(network => (
                    <MUILink key={network.name} href={`/${network.name}`} noLinkStyle sx={{ border: "0.5px", borderRadius: 3, boxShadow: network.boxShadow }}>
                        <ListItem sx={{ display: 'flex', flexDirection: "column" }}>
                            <ListItemAvatar>
                                <Avatar src={network.logo} sx={{ width: 56, height: 56 }} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={network.name}
                                primaryTypographyProps={{
                                    fontWeight: "bold",
                                    textTransform: 'uppercase',
                                }}
                            />
                        </ListItem>
                    </MUILink>
                ))
            }
        </List>
    )
}