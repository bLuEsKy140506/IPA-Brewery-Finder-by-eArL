import "./BreweryList.css";

export default function BreweryList() {
  return (
    <>
      <div className="main-container">
        <h1 className="main-heading">Brewery Finder App</h1>

        <div className="list-container">
          <div className="item-container">
            <p className="item-name badge2">item_name</p>
          </div>
          <div className="item-container">
            <p className="item-name badge2">item_name</p>
          </div>
          <div className="item-container">
            <p className="item-name badge2">item_name</p>
          </div>
          <div className="item-container">
            <p className="item-name badge2">item_name</p>
          </div>
          <div className="item-container">
            <p className="item-name badge2">item_name</p>
          </div>
          <div className="item-container">
            <p className="item-name badge2">item_name</p>
          </div>
        </div>
        <div className="api-pagination">
          <button>PREVIOUS PAGE</button>
          <div className="jump-to">
            <label>Jump to page:</label>
            <input
              type="number"
              id="points"
              name="points"
              className="jump-page"
              value="1"
              min="1"
              max="500"
            ></input>
            <span>/ 100 pages</span>
          </div>

          <button>NEXT PAGE</button>
        </div>
      </div>
    </>
  );
}
