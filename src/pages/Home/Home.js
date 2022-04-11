import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    
    return (
        <>
        TEST
            <div>
                <Link to='photos'>photos</Link>
            </div>
            <div>
                <Link to='todos'>todos</Link>
            </div>
        </>
    )
};

export default Home;