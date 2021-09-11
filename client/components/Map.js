import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((searchResult) => ({
    longitude: searchResult.long,
    latitude: searchResult.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/molandh/ckt67rx2y2r3817qyey9nei0o"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((searchResult) => (
        /* MAP MARKER */
        <div key={searchResult.long}>
          <Marker
            longitude={searchResult.long}
            latitude={searchResult.lat}
            offsetLeft={-10}
            offsetTop={-10}
          >
            <p onClick={() => setSelectedLocation(searchResult)}>
              <LocationMarkerIcon className="text-red-500 h-4 animate-bounce cursor-pointer" />
            </p>
          </Marker>

          {/* MAP POPUP */}
          {selectedLocation.long === searchResult.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              longitude={searchResult.long}
              latitude={searchResult.lat}
            >
              <div className="flex">
                <div className="relative h-20 w-20">
                  <Image
                    src={searchResult.photo}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col ml-2">
                  <p className="w-3/4 font-semibold">
                    {searchResult.propertyName}
                  </p>
                  <p>${searchResult.price} / night</p>
                </div>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
