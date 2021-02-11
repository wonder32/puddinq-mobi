import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import "ol/ol.css"
import MapContext from "./MapContext";
import * as ol from "ol";
import {defaults as defaultControls} from 'ol/control';

const Map = ({ children, zoom, center, rotation }) => {
    const mapRef = useRef();
    const [map, setMap] = useState(null);
    // on component mount

    useEffect(() => {
        let options = {
            view: new ol.View({
                zoom,
                center,
                rotation,
                maxZoom: 22,
                minZoom: 16
            }),
            layers: [],
            controls: defaultControls(),
            overlays: []
        };
        let mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);
        return () => mapObject.setTarget(undefined);
    }, [center, zoom, rotation]);
    // zoom change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [map, zoom]);
    // center change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(center)
    }, [map, center])
    useEffect(() => {
        if (!map) return;
        map.getView().setRotation(rotation)
    }, [map, rotation])
    useEffect(() => {
        if (!map) return;
        var shouldUpdate = true;
        var view = map.getView();
        var updatePermalink = function() {
            if (!shouldUpdate) {
                // do not update the URL when the view was changed in the 'popstate' handler
                shouldUpdate = true;
                return;
            }

            var center = view.getCenter();
            var hash = '#map=' +
                view.getZoom() + '/' +
                Math.round(center[0] * 100) / 100 + '/' +
                Math.round(center[1] * 100) / 100 + '/' +
                view.getRotation();
            var state = {
                zoom: view.getZoom(),
                center: view.getCenter(),
                rotation: view.getRotation()
            };
            window.history.pushState(state, 'map', hash);
            document.getElementById("share-link").href="https://api.whatsapp.com/send?text=" + encodeURIComponent(window.location.href);
        };

        map.on('moveend', updatePermalink);
    }, [map])
    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    )
}
export default Map;