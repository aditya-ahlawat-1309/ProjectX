import React from "react";
import { ThemeProvider } from "styled-components";
import  Main  from "./components/Main";
import AboutPage from "./components/AboutPage";
import { lightTheme, DarkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import {Route, Switch} from "react-router"
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={DarkTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/skills" component={MySkillsPage} />
          <Route path="/work" component={WorkPage} />
          <Route exact path="/signin">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
