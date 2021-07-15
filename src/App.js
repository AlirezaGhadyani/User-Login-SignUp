import GlobalStyle from "./Assets/Styles/GlobalStyle";
import styled from "styled-components";

// Styles
const AppContainer = styled.main`
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
    </AppContainer>
  );
}

export default App;
