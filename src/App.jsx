
import "./App.css";
import { Search } from "./components/Search";
import "./font/Comfortaa-Regular.ttf";
import "./font/Comfortaa-Light.ttf";
import "./font/Comfortaa-Bold.ttf";
import { Gallery } from "./components/Gallery";
import { useState } from "react";

function App() {

const [categorias, setCategorias] = useState(cathegory)

  const onNewCathegory = (newCathegory) => {
    const cathegory = newCathegory
    console.log("cathgory en app",cathegory)

    const find = categorias.find(item=>item.toLowerCase()===newCathegory.toLowerCase())
    if(find)return

    setCategorias(
      [...categorias,
      newCathegory
    ])}



  return (
    <>
      <header className="headfoot">
        <p>Práctica 1</p>
      </header>

      <main className="container">
        <header className="search">
          <h1>Galeria</h1>
          <Search onNewCathegory={onNewCathegory}/>
        </header>
        <Gallery 
         //onNewCathegory={onNewCathegory}
        />

      </main>

      <footer className="headfoot"></footer>
    </>
  );
}

export default App;
