import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBrewery, deleteBrewery } from "../../../store/reducers/brewery";

import "../BreweryList.css";

export default function ListDisplay({ items, wishList }) {
  const dispatch = useDispatch();

  //add to the wishlist -- redux store
  const onClickAdd = (item) => {
    // console.log(item);
    dispatch(addBrewery(item));
  };

  //delete to the wishlist -- redux store
  const onClickDelete = (item) => {
    dispatch(deleteBrewery(item.id));
  };

  return (
    <>
      {items.map((item) => (
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
    </>
  );
}
