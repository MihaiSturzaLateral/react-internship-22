import { useRef, useEffect, useState } from "react";
import Map, {
  Source,
  Layer,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";

import { getMapBounds } from "./utils";
import {
  clusterCountLayer,
  unclusteredPointLayer,
  clusterLayer,
} from "./Layers";

import "mapbox-gl/dist/mapbox-gl.css";
import "./MapComponent.css";

const MapComponent = ({ earthquakes, width, height = 400 }) => {
  const mapRef = useRef();
  const [viewport, setViewport] = useState({});
  const [selectedEarthquake, setSelectedEarthquake] = useState(null);

  // focusing the map on the earthquakes
  useEffect(() => {
    const points = [];
    earthquakes.features && earthquakes.features.forEach((feature) => {
      points.push({
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
      });
    });

    earthquakes.geometry && 
      points.push({
        longitude: earthquakes.geometry.coordinates[0],
        latitude: earthquakes.geometry.coordinates[1],
      });
    const bounds = getMapBounds(points, {
      capZoom: 16,
    });
    setViewport(bounds);
  }, [earthquakes, mapRef]);

  // selecting the earthquake or the cluster to zoom in when clicking on it
  const onClick = (event) => {
    const feature = event.features[0];

    if (!feature) {
      setSelectedEarthquake(null);
      return;
    }

    const clusterId = feature.properties.cluster_id;
    const mapboxSource = mapRef.current.getSource("earthquakes");

    // if the feature is a cluster, we zoom in on the cluster
    clusterId &&
      mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) {
          return;
        }
        mapRef.current.easeTo({
          center: feature?.geometry.coordinates,
          zoom,
          duration: 500,
        });
      });

    // if the feature is a single point (earthquake) we save it in the state
    if (feature.properties && feature.properties.type === "earthquake")
      setSelectedEarthquake({
        ...feature.properties,
        lng: feature.geometry.coordinates[0],
        lat: feature.geometry.coordinates[1],
      });
  };

  // console.log("selectedEarthquake", selectedEarthquake);
  return (
    <div>
      <Map
        ref={mapRef}
        style={{ height, width }}
        {...viewport}
        onMove={(evt) => setViewport(evt.viewState)}
        dragPan
        mapStyle="mapbox://styles/mapbox/dark-v10"
        interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        onViewportChange={setViewport}
        onClick={onClick}
      >
        <FullscreenControl position="top-right" />
        <NavigationControl position="top-right" />
        <ScaleControl />

        <Source
          id="earthquakes"
          type="geojson"
          data={earthquakes}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>

        {selectedEarthquake && (
          <Popup
            anchor="bottom"
            longitude={Number(selectedEarthquake.lng)}
            latitude={Number(selectedEarthquake.lat)}
            onClose={() => setSelectedEarthquake(null)}
            maxWidth={500}
            className="earthquake-popup"
          >
            <div>
              <div className="label-value">
                <div className="label">Title:</div>
                <div className="value"> {selectedEarthquake.title}</div>
              </div>
              <div className="label-value">
                <div className="label">Occurred at:</div>
                <div className="value">
                  {new Date(selectedEarthquake.time).toLocaleString()}
                </div>
              </div>
              <div className="label-value">
                <div className="label">Magnitude:</div>
                <div className="value">{selectedEarthquake.mag}</div>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;
