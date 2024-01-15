import Navbar from "../components/navbar";
import Main from "../components/main";
import Login from "../components/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Main></Main>
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
