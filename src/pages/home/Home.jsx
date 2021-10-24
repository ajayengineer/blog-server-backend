import React from 'react'
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';
import Header from '../../components/header/Header';
import './home.css';

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
        </>
    )
}
