import { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const deta = await response.json();
    setData(deta);
  };

  useEffect(() => {
    getData();
    // const url = "https://jsonplaceholder.typicode.com/users";
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((result) => setData(result));
  }, []);
  return (
    <div className="main-component">
      <div className="header">
        <h1>ROBO ACTIONS</h1>
      </div>
      <div className="search">
        <Search setSearch={setSearch} data={data} setData={setData} />
      </div>
      <div className="card">
        <Card search={search} data={data} />
      </div>
    </div>
  );
};

export default App;
