import React, { useState } from 'react';
import MainScreen from './screens/MainScreen';
import { ProjetsScreen } from './screens/ProjetsScreen';
import CreateProjetScreen from './components/CreateProjet';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {

  const [newProjet, setNewProjet] = useState(true)

  return (
    <>
      {/* <Routes> */}
      <Header setNewProjet={setNewProjet} />
      {/* <Route path="/"> */}
      {<MainScreen newProjet={newProjet} />}
      {/* </Route> */}
      {/* <Route path="/projets"  > */}
      {/* <ProjetsScreen /> */}
      {/* </Route> */}
      {/* <Route path="/new" > */}
      {/* <CreateProjetScreen /> */}
      {/* </Route> */}
      <Footer />
      {/* </Routes> */}
    </>
  );
}

export default App;
