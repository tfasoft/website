import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
    createTheme,
    ThemeProvider,
    CssBaseline,
    colors as Colors,
} from "@mui/material";

import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import ContactUs from "./pages/contactus";

function App() {
    const theme = createTheme({
        palette: {
            mode: "light",
            primary: {
                main: Colors.orange[800],
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact><HomePage /></Route>
                    <Route path="/contact" exact><ContactUs /></Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
