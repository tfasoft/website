import {
    Box,
    Grid,
    Container, Typography
} from "@mui/material";

import {
    Mail,
    Phone,
} from "@mui/icons-material";

const ContactUs = () => {
    return (
        <Container>
            <Grid
                columns={{ xs: 6, md: 12 }}
                spacing={3}
                container
            >
                <Grid
                    xs={6}
                    item
                >
                    <Typography>
                        Contact us directly
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactUs;