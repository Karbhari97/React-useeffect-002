import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function Movie() {
  let [movie, setMovie] = useState("iron");
  let [back, setBack] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${movie}&apikey=73b4d074`)
      .then((res) => {
        setBack(res.data.Search);
        console.log(res.data.Search);
      })
      .catch(alert("API Problem"));
  }, []);

  return (
    <>
      <div >
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <h1 style={{fontWeight:"bolder",color:"whitesmoke"}} >Hooked</h1>
        </nav>
      </div>
      <div className="container mt-5">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie name and click on search "
            aria-label="Enter movie name and click on search"
            aria-describedby="basic-addon2"
            onChange={(event) => {
              setMovie(event.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                axios
                  .get(`https://www.omdbapi.com/?s=${movie}&apikey=73b4d074`)
                  .then((res) => {
                    setBack(res.data.Search);
                    console.log(res.data.Search);
                  })
                  
              }}
            >
              Search
            </button>
          </div>
        </div>
        <p style={{color:"whitesmoke"}}>Sharing a few of our Favourite Movies</p>
        {back.length > 0 && (
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: "60px",
            }}
          >
            {back.map((ele) => {
              return (
                <div className="mt-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <h6
                      className="card-title mt-3"
                      style={{ fontWeight: "bolder" }}
                    >
                      {ele.Title}
                    </h6>
                    <div className="card-body">
                      <img
                        className="card-img-middle"
                        src={ele.Poster}
                        alt="Card image cap"
                        width={250}
                        height={300}
                      />
                      <p className="mt-3">({ele.Year})</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Movie;
