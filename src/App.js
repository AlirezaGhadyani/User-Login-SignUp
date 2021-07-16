import GlobalStyle from "./Assets/Styles/GlobalStyle";
import styled from "styled-components";
import Form from './Components/Pages/Form/Form';
import Profile from "./Components/Pages/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles
const AppContainer = styled.main`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Switch>
          <Route exact path="/loginForm" component={Form} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
