import React from 'react';
import './header.css';
export default function Header() {
    return (
        <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm"> React & None</span>
                    <span className="headerTitleLg"> Blog </span>
                </div>
                <img 
                className="headerImg" 
                src="http://cdn11.overnature.net/5120/863-mysticism-nature-wallpaper.jpg"
                alt="" 
                />
        </div>
    )
}
