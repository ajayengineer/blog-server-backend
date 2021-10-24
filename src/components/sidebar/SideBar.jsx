import React from 'react'
import './sidebar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> About Me </span>
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    alt=""
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi reiciendis id
                    exercitationem ad laborum ducimus officiis.
                </p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Styles</li>
                    <li className="sidebarListItem">Spots</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Technology</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIconn fab fa-facebook-square"></i>
                    <i className="sidebarIconn fab fa-twitter-square"></i>
                    <i className="sidebarIconn fab fa-pinterest-square"></i>
                    <i className="sidebarIconn fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
