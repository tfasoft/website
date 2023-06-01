import { Box, Typography, Button } from "@mui/material";

const DocsTab = () => {
  return (
    <Box>
      <Typography color="text.primary" paragraph gutterBottom>
        If you are a developer, you want to know how is TFA working and want to
        learn how to use it. Here we created a documentation and you can start
        read it now. You can use TFA with every language, but, we created some
        SDKs to make your job easy!
      </Typography>
      <Button
        variant="outlined"
        href="https://docs.tfasoft.com"
        sx={{
          ":hover": {
            color: "white",
            bgcolor: "primary.main",
          },
        }}
      >
        Go to documentation
      </Button>
    </Box>
  );
};

export default DocsTab;
