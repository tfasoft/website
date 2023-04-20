import { Box, Typography, Button } from "@mui/material";

const OpenSource = () => {
  return (
    <Box>
      <Typography paragraph>
        TFA is committed to the notion that open source not only provides great
        technology for developers, but also brings the best out in people. TFA
        believes in it.
      </Typography>
      <Button
        variant="outlined"
        href="https://github.com/tfasoft"
        sx={{
          ":hover": {
            color: "white",
            bgcolor: "primary.main",
          },
        }}
      >
        Open TFAsoft GitHub
      </Button>
    </Box>
  );
};

export default OpenSource;
