import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./BreweryList.css";

export default function BreweryList() {
  const [breweryList, setBreweryList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/v1/breweries/meta`).then((res) => {
      setTotalPage(Math.ceil(res.data.total / 12));
    });
    axios
      .get(
        `https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=12`
      )
      .then((res) => {
        setBreweryList(res.data);
      });
  }, [page]);

  return (
    <>
      <div className="main-container">
        <h1 className="main-heading">Brewery Finder App</h1>

        <div className="list-container">
          {breweryList.map((item) => (
            <div className="item-container" key={item.id}>
              <Link to={`/brewery/${item.id}`}>
                <p className="item-name" value={item.brewery_type}>
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="api-pagination">
          <button
            onClick={() => {
              if (page > 1 && page !== 1) setPage(page - 1);
            }}
          >
            PREVIOUS PAGE
          </button>
          <div className="jump-to">
            <label>Jump to page:</label>
            <input
              type="number"
              id="points"
              name="points"
              className="jump-page"
              min="1"
              value={page}
              max={totalPage}
              onChange={(e) => {
                setPage(e.target.value);
                if (e.target.value > totalPage) {
                  alert("Your page request exceed");
                  setPage(totalPage);
                }
              }}
            ></input>
            <span>/ {totalPage} pages</span>
          </div>

          <button
            onClick={() => {
              if (page < totalPage) {
                setPage(Number(page) + 1);
              }
            }}
          >
            NEXT PAGE
          </button>
        </div>
      </div>
    </>
  );
}
