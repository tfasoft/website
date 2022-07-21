import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
    createTheme,
    ThemeProvider,
    CssBaseline,
    colors as Colors,
} from "@mui/material";
import Navbar from "./components/navbar";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: Colors.orange[800]
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact>Index</Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
