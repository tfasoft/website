import {
  Box,
  Grid,
  Container,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";

import { Mail, Phone, Telegram } from "@mui/icons-material";

const contactWays = [
  {
    text: "support@tfasoft.com",
    icon: <Mail color="primary" />,
  },
  {
    text: "+98 901 4784 362",
    icon: <Phone color="primary" />,
  },
  {
    text: "@tfasoft_support",
    icon: <Telegram color="primary" />,
  },
];

const ContactUs = () => {
  return (
    <Container
      sx={{
        pt: "1rem",
        pb: "1rem",
      }}
    >
      <Grid columns={{ xs: 6, md: 12 }} spacing={3} container>
        <Grid xs={6} item>
          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Contact us directly!
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              gutterBottom
              paragraph
            >
              You can contact us if you have any question or what to create a
              new service!
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} item>
          <Box>
            <List>
              {contactWays.map((way) => {
                return (
                  <ListItem>
                    <ListItemIcon>{way.icon}</ListItemIcon>
                    <ListItemText primary={way.text} />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
