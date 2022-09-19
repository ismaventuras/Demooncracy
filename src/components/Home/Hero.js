import { Container, Typography } from "@mui/material";


export function Hero() {
    return (
        <Container disableGutters maxWidth={"md"} component={"div"} sx={{ pt: 8, pb: 6 }}>
            <Typography
                component={"h1"}
                variant={"h2"}
                align={"center"}
                color={"text.primary"}
                gutterBottom
            >
                Demooncracy
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component={"p"} align={"justify"}>
                Demooncracy is an app built for the  Connected Contracts Hackathon (https://moonbeam.devpost.com/) with the objective to improve the Moonbeam/Moonriver/Moonbase onchain governance. You can check proposals and referenda and vote for them. You can also create discussions and discuss with other people using your wallet.
            </Typography>
        </Container>
    )
}
