import React from "react";
import SignLogo from "./icon/SignLogo";
import './Sign.css'

function Sign(){
    return(
        <div className="sign">
            <form>
                <label>
                    <div className="label-div">
                        <span><SignLogo/></span>
                        <p>Learn about new offers by joining our newsletter</p>
                    </div>
                </label>
                <input/>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Sign