import React, { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import * as Bs from "react-icons/bs";
import Overlay from 'ol/Overlay';

const Popup = ({ zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let
            container = document.getElementById('popup'),
            content_element = document.getElementById('popup-content'),
            closer = document.getElementById('popup-closer');

        closer.onclick = function() {
            overlay.setPosition(undefined);
            closer.blur();
            return false;
        };

        let overlay = new Overlay({
            element: container,
            autoPan: true,
            offset: [0, -10]
        });
        map.addOverlay(overlay);

        map.on('click', function(evt) {
            let coordinates = evt.coordinate;
            let features = {};

            map.forEachFeatureAtPixel(evt.pixel,
                function(feature, layer) {
                    features[layer.get('name')] = features[layer.get('name')] || [];
                    features[layer.get('name')].push(feature);
            });

            // vergunningen
            if (features["Vergunningen"] && features["Vergunningen"].length > 0) {

                let feature = features["Vergunningen"]["0"];
                let content = "<b>" + feature.get('overheid') + "</b><br>" + feature.get('onderwerp') + "<br>";
                content += feature.get('titel');
                content += ' <a href="' + feature.get('url') + '" target="_blank">bekijk</a>';
                if (features["Vergunningen"].length > 1) {
                    content += '<br><br><b>Andere vergunningen hier</b><br>';
                    for (let i = 1; i < features.length; i++) {
                        content += features[i].get('onderwerp') + " <a href='" + features[i].get('url') + "' target='_blank'>bekijk</a><br>";
                        console.log(features[i]);
                    }
                }

                content_element.innerHTML = content;
                overlay.setPosition(coordinates);

            } else
            if (features["Panden"] && features["Panden"].length > 0) {
                let feature = features["Panden"]["0"];

                let content = "<b>" + feature.get('aantal_verblijfsobjecten') + " x " + feature.get('gebruiksdoel') + "</b><br>";
                content += "Bouwjaar: " + feature.get('bouwjaar') + "<br>";
                content += "Gebruiksdoel: " + feature.get('gebruiksdoel') + "<br>";
                content += "Gid: " + feature.get('gid') + "<br>";
                content += "Min oppervlakte: " + feature.get('oppervlakte_max') + " m2<br>";
                content += "Max oppervlakte: " + feature.get('oppervlakte_min') + " m2<br>";
                content += "Status: " + feature.get('status') + "<br>";
                content += ' <a href="' + feature.get('rdf_seealso') + '" target="_blank">bekijk</a>';

                content_element.innerHTML = content;
                overlay.setPosition(coordinates);

            } else
            if (features["Kadaster"] && features["Kadaster"].length > 0) {
                let feature = features["Kadaster"]["0"];
                console.log(feature);
                let content = "<b>Perceel in " + feature.get('kadastraleGemeenteWaarde') + "</b><br>";
                content += "Grootte: " + feature.get('kadastraleGrootteWaarde') + " m2<br>";

                content_element.innerHTML = content;
                overlay.setPosition(coordinates);

            }
        });

        return () => {
            if (map) {
                //map.removeLayer(buildingSource);
            }
        };
    }, [map, zIndex])

    return (

        <div id="popup" className="ol-popup">
            <Bs.BsXSquare className='out' id="popup-closer"/>
            <div id="popup-content"></div>
        </div>

    );
};
export default Popup;
