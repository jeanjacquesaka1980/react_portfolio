import React from "react";
import Header from './Components/Header/Header';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';

// import bootsrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  return (
    <>
      <Header/>
      <main className="container mt-5">
        <Resume />
        <Portfolio />
      </main>
    </>
  );
};

export default App;
