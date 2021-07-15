import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="app-wrapper">
        <header className="header">
          <img className={"imgNav"}
               src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXesR3xNbNhV4X5G2qsCUb3FFmBdVTBa4Aw&usqp=CAU"}/>
        </header>
        <nav className={"nav"}>
          <div>
            <a href="#">Profile</a>
          </div>
          <div>
            <a href="#">Message</a>
          </div>
          <div>
            <a href="#">News</a>
          </div>
          <div>
            <a href="#">Musics</a>
          </div>
          <div>
            <a href="#">Settings</a>
          </div>

        </nav>
        <div className="content">
          content
        </div>
      </div>
  );
}

export default App;
