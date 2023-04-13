import React from 'react'

const Main = ({children}) =>(
    <div className="Main">
        <div className="Main-container bg-dark">
            {children}
        </div>
    </div>
);

export default Main;