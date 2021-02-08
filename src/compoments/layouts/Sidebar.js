import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import * as FaIcons from "react-icons/fa";
import MapContext from "../Map/MapContext";

const Sidebar = (props) => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        /* input toggle layers*/
        function bindInputs(layerid, layer) {
            let visibilityInput = document.getElementById(layerid);
            visibilityInput.addEventListener('change', function() {
                layer.setVisible(this.checked);
                map.getView().animate({
                        zoom: 19
                    }
                )
            }, false);

            visibilityInput.checked = layer.getVisible();
        }

        map.getLayers().forEach(function(layer, i) {
            let layerList = document.getElementById("layer-list");
            let name = layer.get('name');
            layerList.insertAdjacentHTML('beforeend', '<li><label id="layer' + i + '" class="checkbox" for="visible'
                + i + '"><input id="visible' + i + '" class="visible mapcheckbox" type="checkbox"> ' + name +
                '</label><input id="slider' + i + '" type="range" min="0" max="1" step="0.1" value="1" class="shifter" style="display:none">');
            bindInputs('visible' + i, layer);
        });

        return () => {};
    }, [map])

    return (
        <SidebarContainer>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className={sidebar ? 'toggle-sidebar active' : 'toggle-sidebar'}  onClick={showSidebar}>
                    <FaIcons.FaBars />
                </div>
                <div className="sidebar-header">
                    <h3>Layers</h3>
                </div>

                <ul id="layer-list">
                </ul>

                <div className="sidebar-header">
                    <h3>Sharing</h3>
                </div>

                <div className="sidebar-header">
                    <h3>Over</h3>
                </div>
                <p>
                    puddinq.mobi biedt een handzame gebundelde versie van opensource en opdata gegevens van luchtfoto's,
                    landkaarten, kadaster- en bebouwingsgrenzen, bebouwingshoogtes en vergunningen.
                </p>
            </div>
        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`

.nav-menu {
    background-color: #fff;
    transition: 0.5s;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 250px;
    left: -250px;
    padding: 61px 17px 17px 17px;
    z-index: 4;
}

.nav-menu.active {
    left: 0px;
}

.toggle-sidebar {
    position: relative;
    left: 233px;
    top: 400px;
    width:40px;
    height:40px;
    text-align: right;
    padding-right:12px;
    background-color: white;
    border-radius: 0 5px 5px 0;
    transition: 0.5s;
    padding-top: 7px;
}

@media (min-width: 1000px) {
    .nav-menu {
    left: -220px;
} 


`;