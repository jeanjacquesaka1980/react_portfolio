import React from "react";
import Header from './Components/Header/Header';
import Resume from './Components/Resume/Resume';

// import bootsrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  return (
    <>
      <Header/>
      <main className="container mt-5">
        <Resume />
      </main>
    </>
  );
};

export default App;
