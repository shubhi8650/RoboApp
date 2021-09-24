const Search = ({ setSearch, data, setData }) => {
  const changeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  return <input onChange={changeHandler} type="text" placeholder="Search.." />;
};

export default Search;
