import React, { useState, useEffect } from 'react';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error("Error fetching beer data:", error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Beer Catalog</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search beers..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredBeers.map((beer) => (
          <div className="col-md-4 mb-4" key={beer.id}>
            <div className="card h-100">
              <img
                src={beer.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={beer.name}
              />
              <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">{beer.description || "No description available."}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
