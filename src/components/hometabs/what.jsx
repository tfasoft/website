import {
    Box,
    Typography,
    Button,
} from "@mui/material";

const WhatTab = () => {
    return (
        <Box>
            <Typography
                paragraph
                gutterBottom
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
            </Typography>
            <Button
                variant="outlined"
                sx={{
                    ":hover": {
                        color: "white",
                        bgcolor: "primary.main"
                    }
                }}
            >
                Get started with TFA
            </Button>
        </Box>
    );
}

export default WhatTab;