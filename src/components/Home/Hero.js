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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante nulla, malesuada a pretium sit amet, suscipit ut augue. Nunc aliquet velit non magna feugiat dignissim. Mauris pharetra id lacus blandit tincidunt. Mauris eu lacinia massa, non luctus ante. Quisque scelerisque blandit nisi, vel iaculis neque tincidunt eu. Aenean blandit, diam vitae pellentesque egestas, mauris metus pretium tellus, a auctor erat odio consectetur odio. Suspendisse mollis odio vel lorem viverra, nec tempus est elementum. Vestibulum malesuada malesuada vestibulum. Donec quis sapien eu magna aliquet dictum eget quis tortor.
            </Typography>
        </Container>
    )
}
