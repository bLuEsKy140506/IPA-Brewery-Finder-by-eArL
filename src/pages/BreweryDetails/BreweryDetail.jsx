import { useLoaderData } from "react-router-dom";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./BreweryDetail.css";

export default function BreweryDetail() {
  const breweryDetails = useLoaderData();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOsq2FkcHvMEoyIwcHyvLLjvMFphVK2QQ",
  });
  const [map, setMap] = useState(null);
  const [latlong, setlatlong] = useState({
    lat: Number(breweryDetails.latitude),
    lng: Number(breweryDetails.longitude),
  });

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(latlong);
    // map.fitBounds(bounds);
    map.setZoom(18);

    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const containerMap = {
    width: "80%",
    height: 300,
    padding: "2rem auto",
    margin: "2rem auto",
  };
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
        <div>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerMap}
              center={latlong}
              // zoom={1000}
              onLoad={onLoad}
              onUnmount={onUnmount}
              mapTypeId="hybrid"
              label="true"
            >
              <Marker
                position={latlong}
                map={map}
                title={`Place of ${breweryDetails.name}`}
              ></Marker>
            </GoogleMap>
          ) : (
            <p>Error</p>
          )}
        </div>
      </div>
    </>
  );
}

export const breweryDetail = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://api.openbrewerydb.org/v1/breweries/" + id);
  return res.json();
};
