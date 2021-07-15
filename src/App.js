import GlobalStyle from "./Assets/Styles/GlobalStyle";
import styled from "styled-components";
import Form from './Components/Pages/Form/Form';

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
    <AppContainer>
      <GlobalStyle />
      <Form />
    </AppContainer>
  );
}

export default App;
