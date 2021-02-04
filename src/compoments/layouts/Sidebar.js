import React, {useState} from 'react';
import styled from 'styled-components';
import * as FaIcons from "react-icons/fa";


const Sidebar = (props) => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <SidebarContainer>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className={sidebar ? 'toggle-sidebar active' : 'toggle-sidebar'}  onClick={showSidebar}>
                    <FaIcons.FaBars />
                </div>
                <div className="sidebar-header">
                    <h3>Layers</h3>
                </div>
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
    padding-top: 61px;
    z-index: 4;
}

.nav-menu.active {
    left: 0px;
}

.toggle-sidebar {
    position: relative;
    left: 250px;
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