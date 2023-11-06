import "./App.css";
import Prezimenaprops from "./Components/Prezimenaprops";
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
      <Prezimenaprops first="Mario" last="Marić" age={34}>
        <span>Ovo je neki children props! </span>
      </Prezimenaprops>
    </div>
  );
}

export default App;

// 1.	Potrebno je napraviti dvije komponente
// 2.	Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom (props) number
// 3.	U ovisnusti o poslanom broju treba ispisati drukčiji tekst
// 4.	Ako se pošalje nedefinirani broj, komponenta ConditionalRendering ništa ne ispisuje

//DZ:
// 1.	U vježbi je potrebno napraviti četiri komponente u četiri odvojene datoteke. Komponenta App i još jedna komponenta moraju biti definirane klasom, a dvije komponente je potrebno definirati funkcijom.
// 2.	Komponenta App mora biti parent komponenta ostalima i mora sadržavati polje "korisnici" koje unutar sebe sadrži tri objekta s imenima i godinama korisnika.
// 3.	Komponenta App mora pozivati ostale komponente i u pozivu preko props-a im treba proslijediti ime i godine korisnika, jednu komponentu je potrebno pozvati s "children" propsima.
// 4.	Komponenta definirana funkcijom treba prikazati ime i godine korisnika.
// 5.	Komponenta definirana klasom treba prikazati ime i godine korisnika.
// 6.	Druga komponenta definirana funkcijom treba prikazati ime i godine korisnika, te treba ispisati proslijeđene children propse.
