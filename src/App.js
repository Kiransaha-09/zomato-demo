import "./App.css";
import React, { useState } from "react";
import CardList from "./Components/CardList/CardList";

function App() {
  const [searchText,setSearchText]=useState("");
  const handleSearch = (e)=>{
    setSearchText(e.target.value);
  }
  return (
    <div className="container">
      <h1 className="header">Desserts</h1>
      <input type="text" placeholder=" Search..." className="search-cart" onChange={(e)=>handleSearch(e)}></input>
      <div className="App">
        <CardList searchText={searchText}/>
      </div>
    </div>
  );
}
export default App;
