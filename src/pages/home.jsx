import { useState } from "react";

import {
    colors as Colors,
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    Tab, Divider,
} from "@mui/material";

import {
    TabList,
    TabPanel,
    TabContext
} from "@mui/lab";

import {
    Security,
} from "@mui/icons-material";

import TelegramLogo from "../assets/images/telegram_logo.png";

import CocacolaLogo from "../assets/images/logos/Coca-Cola_logo_logotype_emblem.png";
import MicrosoftLogo from "../assets/images/logos/microsoft_logo.png";
import MetaLogo from "../assets/images/logos/meta_logo.png";
import IntelLogo from "../assets/images/logos/intel_logo.png";
import GoogleLogo from "../assets/images/logos/google_logo.png";
import BlockChainLogo from "../assets/images/logos/blockchain_logo.png";
import AppleLogo from "../assets/images/logos/apple_logo.png";
import AmazonLogo from "../assets/images/logos/amazon-logo.png";

import WhatTab from "../components/hometabs/what";
import DocsTab from "../components/hometabs/docs";
import Opensource from "../components/hometabs/opensource";

const logos = [
    {
        alt: "Coca Cola",
        img: CocacolaLogo,
    },
    {
        alt: "Google",
        img: GoogleLogo,
    },
    {
        alt: "Meta",
        img: MetaLogo,
    },
    {
        alt: "Apple",
        img: AppleLogo,
    },
    {
        alt: "Amazon",
        img: AmazonLogo,
    },
    {
        alt: "Microsoft",
        img: MicrosoftLogo,
    },
    {
        alt: "Intel",
        img: IntelLogo,
    },
    {
        alt: "Blockchain",
        img: BlockChainLogo,
    },
];

const HomePage = () => {
    const [tab, setTab] = useState('1');
    const changeTab = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                mt: "2rem",
                mb: "2rem",
            }}
        >
            <Box
                sx={{
                    mb: "1rem",
                }}
            >
                <Grid
                    columns={{ md: 12, xs: 6 }}
                    spacing={2}
                    container
                >
                    <Grid
                        xs={6}
                        item
                    >
                        <Box
                            sx={{
                                p: 5
                            }}
                        >
                            <Typography
                                variant="h2"
                                fontWeight="700"
                                fontSize={70}
                                fontFamily="Edu SA Beginner"
                                color="primary"
                            >
                                A modern authentication platform
                            </Typography>
                            <br />
                            <br />
                            <Paper
                                variant="outlined"
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: 10,
                                    borderColor: "none"
                                }}
                            >
                                <TabContext value={tab}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={changeTab} aria-label="lab API tabs example">
                                            <Tab
                                                label="What is TFA?"
                                                value="1"
                                            />
                                            <Tab
                                                label="For developers"
                                                value="2"
                                            />
                                            <Tab
                                                label="Open-Source"
                                                value="3"
                                            />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <WhatTab />
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <DocsTab />
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <Opensource />
                                    </TabPanel>
                                </TabContext>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid
                        xs={6}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Box
                                component="img"
                                src={TelegramLogo}
                                alt="Telegram Logo"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Container
                id="about"
                maxWidth="md"
            >
                <Box
                    sx={{
                        textAlign: "center",
                        p: 5,
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        fontSize={40}
                        color="primary"
                        gutterBottom
                    >
                        Why TFA?
                    </Typography>
                    <Typography
                        color="text-secondary"
                        paragraph
                    >
                        With TFASoft you will be using Telegram as a authentication provider like providers such as Google, Facebook, Apple ID and many others.
                        We (TFASoft) won't access your data. Even a name! It means that you can trust us like big companies that trust us!
                    </Typography>
                </Box>
            </Container>
            <Container>
                <Grid
                    columns={{ xs: 4, md: 12 }}
                    spacing={10}
                    container
                >
                    <Grid
                        xs={4}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 90,
                                    mb: "1rem",
                                }}
                            />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Title
                            </Typography>
                            <Typography
                                paragraf
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        xs={4}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 90,
                                    mb: "1rem",
                                }}
                            />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Title
                            </Typography>
                            <Typography
                                paragraf
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        xs={4}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 90,
                                    mb: "1rem",
                                }}
                            />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Title
                            </Typography>
                            <Typography
                                paragraf
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <Divider />
            <br />
            <Container
                sx={{
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={700}
                    fontSize={35}
                    color="primary"
                    gutterBottom
                >
                    Trusted by many
                </Typography>
                <br />
                <Grid
                    columns={{ xs: 1, md: 6 }}
                    spacing={10}
                    container
                >
                    {
                        logos.map((logo) => {
                            return (
                                <Grid
                                    xs={1}
                                    item
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            textAlign: 'center',
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            src={logo.img}
                                            component="img"
                                            alt={logo.alt}
                                            sx={{
                                                width: "100%"
                                            }}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Container>
        </Container>
    );
}

export default HomePage;