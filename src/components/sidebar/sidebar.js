import React from 'react';
import {FaTachometerAlt, FaTerminal, FaCommentDots, FaIcons, FaLightbulb, FaCog, FaBalanceScale, FaDatabase, FaMusic} from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import logo from '../../img/logo.png';

class Sidebar extends React.Component {
    render() {
        return (
            <nav className="sidebar">
                <ul className="sidebar-nav">
                    <li>
                        <img className="logo" src={logo} alt="logo" />
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="sidebar-item">
                        <FaTachometerAlt />
                        &nbsp;&nbsp;
                        <a className="sidebar-link active" href="#">Dashboard</a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="sidebar-heading">General settings</li>
                    <li className="sidebar-item">
                        <FaTerminal />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">General commands</a>
                    </li>
                    <li className="sidebar-item">
                        <FaCommentDots />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Custom commands</a>
                    </li>
                    <li className="sidebar-item">
                        <FaIcons />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Reaction roles</a>
                    </li>
                    <li className="sidebar-item">
                        <FaLightbulb />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Suggestions</a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="sidebar-heading">Moderation</li>
                    <li className="sidebar-item">
                        <FaCog />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Moderation settings</a>
                    </li>
                    <li className="sidebar-item">
                        <FaBalanceScale />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Moderation commands</a>
                    </li>
                    <li className="sidebar-item">
                        <FaDatabase />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Moderation logs</a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="sidebar-heading">Welcomes</li>
                    <li className="sidebar-item">
                        <FaCog />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Welcome settings</a>
                    </li>
                    <li className="sidebar-item">
                        <FaDatabase />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Welcome logs</a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="sidebar-heading">Music</li>
                    <li className="sidebar-item">
                        <FaCog />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Music settings</a>
                    </li>
                    <li className="sidebar-item">
                        <RiPlayListFill />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Music playlists</a>
                    </li>
                    <li className="sidebar-item">
                        <FaMusic />
                        &nbsp;&nbsp;
                        <a className="sidebar-link" href="#">Music commands</a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;