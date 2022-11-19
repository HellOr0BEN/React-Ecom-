import Layout from "./Compoments/Layout/Layout";
import AppContextContainer from "./Context/AppContext";


function App() {
  return (
    <div className="App">
      <AppContextContainer>

        <Layout />
      </AppContextContainer>
    </div>
  );
}

export default App;
