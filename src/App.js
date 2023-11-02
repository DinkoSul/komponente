import "./App.css";
import Komponentaklase from "./Components/komponentaklase";
import Logoperator from "./Components/logoperator";
import Varijabla from "./Components/varijabla";
import Zadaca from "./Components/zadaca";

function App() {
  const user = "Ivan Horvat";

  return (
    <div className="App">
      <Zadaca />
      <Varijabla user={user} />
      <Logoperator user={user} />
      <Komponentaklase user={user} />
    </div>
  );
}

export default App;
