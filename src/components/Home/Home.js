import React, { useEffect, useState } from 'react';
import Transport from '../Transport/Transport';
import data from '../../data/data.json'
import './Home.css'

const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect(() => {
        setTransport(data)
    }, [])


    return (
        <div className="metro">
            <div className="container">
                <div className="row align-items-center justify-content-center pt-5 gy-3">
                    {
                        transport.map(cv => <Transport key={cv.id} transport={cv} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;