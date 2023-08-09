import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  addBrewery,
  deleteBrewery,
  fetchBrewery,
} from "../../store/reducers/brewery";

import SearchBox from "../../components/search-box/search-box.component";

import "./BreweryList.css";

export default function BreweryList() {
  const [breweryList, setBreweryList] = useState([]);
  const [breweryListsearch, setBreweryListsearch] = useState([]);
  const [page, setPage] = useState(1);
  const [searchField, setSearchField] = useState("");

  const [totalPage, setTotalPage] = useState(1);

  const wishList = useSelector((state) => state.brewery);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.openbrewerydb.org/v1/breweries/search?query=${searchField}`
      )
      .then((res) => {
        setTotalPage(Math.ceil(res.data.length / 10));
      });

    axios
      .get(
        `https://api.openbrewerydb.org/v1/breweries/search?query=${searchField}&page=${page}&per_page=10`
      )
      .then((res) => {
        setBreweryListsearch(res.data);
      });
  }, [page, searchField]);

  useEffect(() => {
    if (searchField === "") {
      axios
        .get(`https://api.openbrewerydb.org/v1/breweries/meta`)
        .then((res) => {
          setTotalPage(Math.ceil(res.data.total / 12));
        });
    }
    axios
      .get(
        `https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=12`
      )
      .then((res) => {
        setBreweryList(res.data);
      });
  }, [page, searchField]);

  useEffect(() => {
    dispatch(fetchBrewery());
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    setPage(1);
  };

  const onClickAdd = (item) => {
    // console.log(item);
    dispatch(addBrewery(item));
  };

  const onClickDelete = (item) => {
    dispatch(deleteBrewery(item.id));
  };

  return (
    <>
      <div className="main-container">
        <h1 className="main-heading">🔎Brewery Finder App</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="search brewery name"
        />

        <div className="list-container">
          {searchField === "" &&
            breweryList.map((item) => (
              <div className="item-container" key={item.id}>
                <Link to={`/brewery/${item.id}`}>
                  <p className="item-name badge2" value={item.brewery_type}>
                    {item.name}
                  </p>
                </Link>
                {wishList.some((el) => el.id === item.id) ? (
                  <div className="item-description">
                    <p className="sm-description">This was been added</p>
                    <button
                      className="btn-delete"
                      onClick={() => {
                        onClickDelete(item);
                      }}
                    >
                      Delete from Wishlist
                    </button>
                  </div>
                ) : (
                  <div className="item-description">
                    <p className="sm-description">Not yet added</p>
                    <button
                      className="btn-add"
                      onClick={() => {
                        onClickAdd(item);
                      }}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                )}
              </div>
            ))}
          {searchField !== "" &&
            breweryListsearch.map((item) => (
              <div className="item-container" key={item.id}>
                <Link to={`/brewery/${item.id}`}>
                  <p
                    className="item-name badge2"
                    value={item.brewery_type}
                    key={item.id}
                  >
                    {item.name}
                  </p>
                </Link>
                {wishList.some((el) => el.id === item.id) ? (
                  <div className="item-description">
                    <p className="sm-description">This was been added</p>
                    <button
                      className="btn-delete"
                      onClick={() => {
                        onClickDelete(item);
                      }}
                    >
                      Delete from Wishlist
                    </button>
                  </div>
                ) : (
                  <div className="item-description">
                    <p className="sm-description">Not yet added</p>
                    <button
                      className="btn-add"
                      onClick={() => {
                        onClickAdd(item);
                      }}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                )}
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
