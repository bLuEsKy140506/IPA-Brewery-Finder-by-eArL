import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { deleteBrewery, fetchBrewery } from "../../store/reducers/brewery";

import PaginatedItems from "../../components/pagination/Pagination";

export default function WishList() {
  const wishList = useSelector((state) => state.brewery);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrewery());
  }, []);

  return (
    <>
      <h2 className="wish-heading">My Wishlist 🍻</h2>
      <PaginatedItems itemsPerPage={12} arrayObject={wishList} />
    </>
  );
}

export function Items({ currentItems }) {
  const dispatch = useDispatch();

  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <>
            <div
              className="item-container badge2"
              value={item.brewery_type}
              key={item.id}
            >
              {/* <img src={bg} alt="background" className="bg-img" />{" "} */}
              <Link to={`/brewery/${item.id}`} key={item.id}>
                <p className="item-name">{item.name}</p>
              </Link>

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
            </div>
          </>
        ))}
    </>
  );
}
