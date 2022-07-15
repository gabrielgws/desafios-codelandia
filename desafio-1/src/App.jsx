import { useState } from "react";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer/Index";

function App() {
  const [search, setSearch] = useState("");

  function handleChange(event){
    setSearch(event.target.value)
    console.log(event.target.value)
  }
  
  return (
    <>
      <Header search={search} setSearch={setSearch} handleChange={handleChange}/>
      <PostContainer search={search}/>
    </>
  );
}

export default App;
