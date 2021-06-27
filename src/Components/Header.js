import React from "react";
const Header =({handleToggle})=>{
    return(
        <div className="header-container">
            <h1>Notes</h1>
            <button className="save" onClick={
                ()=> handleToggle(
                    (prevDarkMode) => !prevDarkMode
                )}>Toggle Mode</button>
        </div>
    );
}

export default Header