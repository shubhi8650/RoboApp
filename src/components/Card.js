const Card = ({ search, data }) => {
  return (
    <div className="main-card">
      {data
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((item, key) => (
          <div key={Math.floor(Math.random() * 1000)} className="wrapper-card">
            <div className="image">
              <img src={`https://robohash.org/${item.id}?200x200`} alt="pic" />
            </div>
            <div className="details">
              <h3>{item.name}</h3>
              <p>{item.email}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
