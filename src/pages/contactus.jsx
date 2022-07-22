import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
    Box,
    Grid,
    Container,
    Typography,
    List,
    ListItemIcon,
    ListItemText,
    ListItem,
    TextField,
    Button,
    Snackbar,
    Alert,
} from "@mui/material";

import {
    Mail,
    Phone,
    Telegram,
} from "@mui/icons-material";

const contactWays = [
    {
        text: "support@telefa.com",
        icon: <Mail color="primary" />
    },
    {
        text: "+98 901 4784 362",
        icon: <Phone color="primary" />
    },
    {
        text: "@telefa_support",
        icon: <Telegram color="primary" />
    },
];

const ContactUs = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [surname, setSurname] = useState('');
    const [surnameError, setSurnameError] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState(false);

    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);

    // Snackbar
    const [openSnack, setOpenSnack] = useState(false);
    const [messageSnack, setMessageSnack] = useState('');
    const [typeSnack, setTypeSnack] = useState('');
    const createSnack = (d) => {
        setMessageSnack(d.message);
        setTypeSnack(d.type);

        setOpenSnack(true);
    }

    const env = process.env;

    const sendEmail = () => {
        if (name !== '' && email !== '' && subject !== '' && message !== '') {
            setNameError(false);
            setEmailError(false);
            setSubjectError(false);
            setMessageError(false);

            const messageData = {
                name,
                surname,
                email,
                subject,
                message,
            };

            emailjs.send(env.REACT_APP_SERVICE_ID, env.REACT_APP_TEMPLATE_ID, messageData, env.REACT_APP_PUBLIC_KEY)
                .then((result) => {
                    createSnack({
                        message: 'Message sent. Thank you!',
                        type: 'success',
                    });

                    setName('');
                    setSurname('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                })
                .catch((error) => {
                    createSnack({
                        message: error.text,
                        type: 'error',
                    });
                });
        } else {
            if (name === '') setNameError(true);
            if (email === '') setEmailError(true);
            if (subject === '') setSubjectError(true);
            if (message === '') setMessageError(true);

            createSnack({
                message: 'Complete required fields first.',
                type: 'error',
            });
        }
    }

    return (
        <Container
            sx={{
                pt: "1rem",
                pb: "1rem",
            }}
        >
            <Grid
                columns={{ xs: 6, md: 12 }}
                spacing={3}
                container
            >
                <Grid
                    xs={6}
                    item
                >
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="primary"
                            gutterBottom
                        >
                            Contact us!
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            gutterBottom
                            paragraph
                        >
                            Here you can send an email via site to us. We will see your Email and have a response to it.
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    xs={6}
                    item
                >
                    <Box>
                        <Grid
                            columns={{ xs: 6, md: 12 }}
                            spacing={2}
                            container
                        >
                            <Grid
                                xs={6}
                                item
                            >
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    label="Name"
                                    placeholder="Your name"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    error={nameError}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid
                                xs={6}
                                item
                            >
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    label="Surname"
                                    placeholder="Your surname"
                                    type="text"
                                    onChange={(e) => setSurname(e.target.value)}
                                    value={surname}
                                    error={surnameError}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                            >
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    label="Email"
                                    placeholder="Your email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    error={emailError}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                            >
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    label="Subject"
                                    placeholder="Enter subject"
                                    type="text"
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}
                                    error={subjectError}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                            >
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    label="Message"
                                    placeholder="Now describe your request"
                                    type="text"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    error={messageError}
                                    rows={5}
                                    multiline
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                item
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={() => sendEmail()}
                                    disableElevation
                                    fullWidth
                                >
                                    Submit your request
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <br />
            <Grid
                columns={{ xs: 6, md: 12 }}
                spacing={3}
                container
            >
                <Grid
                    xs={6}
                    item
                >
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            color="primary"
                            gutterBottom
                        >
                            Or contact us directly!
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            gutterBottom
                            paragraph
                        >
                            You can contact us if you have any question or what to create a new service!
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    xs={6}
                    item
                >
                    <Box>
                        <List>
                            {
                                contactWays.map((way) => {
                                    return (
                                        <ListItem>
                                            <ListItemIcon>
                                                {way.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={way.text} />
                                        </ListItem>
                                    );
                                })
                            }
                        </List>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar open={openSnack} autoHideDuration={6000} onClose={() => setOpenSnack(false)}>
                <Alert onClose={() => setOpenSnack(false)} severity={typeSnack}>
                    {messageSnack}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default ContactUs;