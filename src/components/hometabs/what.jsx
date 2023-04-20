import { Box, Typography, Button } from "@mui/material";

const WhatTab = () => {
  return (
    <Box>
      <Typography paragraph gutterBottom>
        TFASoft is a new modern authentication way that is providing via
        Telegram.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          ":hover": {
            color: "white",
            bgcolor: "primary.main",
          },
        }}
        href="#about"
      >
        Get started with TFAsoft
      </Button>
    </Box>
  );
};

export default WhatTab;
