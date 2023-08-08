import { useLoaderData } from "react-router-dom";

export default function BreweryDetail() {
  const breweryDetails = useLoaderData();

  //www.google.com/travel/flights/search?q=flights+manila+philippines+to+new+york+america

  return (
    <>
      <div className="details-main-container">
        <div className="badge-container">
          <h2 className="item-title badge" value={breweryDetails.brewery_type}>
            {breweryDetails.name}
          </h2>
        </div>
        <hr />
        <div className="description-brewery">
          <p>
            {/* <span className="span-description">COMPLETE ADDRESS: </span>{" "} */}
            <span>{breweryDetails.address_1}</span>,&nbsp;
            <span>{breweryDetails.city}</span>,&nbsp;
            <span>{breweryDetails.state_province}</span>,&nbsp;
            <span>{breweryDetails.state}</span>,&nbsp;
            <span>{breweryDetails.country}</span>
          </p>

          <p>
            {/* <span className="span-description">OFFICIAL WEBSITE: </span>{" "} */}
            <a href={breweryDetails.website_url}>
              <span className="website-url">{breweryDetails.website_url}</span>
            </a>
          </p>
        </div>
        <iframe
          src={breweryDetails.website_url}
          height="550"
          width="355px"
        ></iframe>

        <p>
          <a
            href={`https://www.google.com/travel/flights/search?q=flights+manila+philippines+to+${breweryDetails.state}+${breweryDetails.country}/`}
            target="_blank"
            className="website-url-gohere"
          >
            I want to go HERE!🛩️
          </a>
        </p>
      </div>
    </>
  );
}

export const breweryDetail = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://api.openbrewerydb.org/v1/breweries/" + id);
  return res.json();
};
