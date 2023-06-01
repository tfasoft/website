import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  colors as Colors,
  Container,
} from "@mui/material";

import { Vazirmatn } from "next/font/google";

import { Navbar } from "@/components";

const vazir = Vazirmatn({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: Colors.orange[800],
      },
      text: {
        title: "#000080",
      },
    },
    typography: {
      fontFamily: vazir.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ my: 2 }}>
        <Navbar />
        <Container sx={{ my: 2 }}>
          <Component {...pageProps} />
        </Container>
      </Container>
    </ThemeProvider>
  );
}
