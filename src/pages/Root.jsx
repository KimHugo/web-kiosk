import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div id='container'>
            <aside>Hello Aside!
                <ul>
                    <li><Link to={"/1f"}>1F</Link></li>
                </ul>

            </aside>
            <Outlet />
            
        </div>
    );
}

