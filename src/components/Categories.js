import React, { useEffect, useState } from "react";
import './Categories.css'
import SebetLogo from "./icon/Sebet";
import CategorieLogo from "./icon/CategorieLogo";
import axios from "axios";

function Categories() {
    let [select, setSelect] = useState([])
    function getSelect(e) {
        let selectData = e.target.value
        let selectMAIN = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${selectData}&key=AIzaSyDPOJxc0jJ7_7wCv0YpIQXEZng8EA4I3Qs`).then(res => {
            console.log(res.data.items);
            setSelect(res.data.items)
           
        }).catch(err => console.log(err))
    
    }
    useEffect(()=>{
        select?.map((d)=>{
            console.log( d.volumeInfo.categories);
        })
    })
    return (
        <div className="categories">
            <div className="categories-1">
                <div className="categories-1-select">
                    <select>
                        <option>Shop  by category</option>
                        <option>Fantastick</option>
                        <option>Dram</option>
                        <option>horror</option>
                        <option >Funny</option>
                        <option >Boarding schools</option>
                    </select>
                    {/* <span><CategorieLogo/></span> */}
                </div>
                <p>Coming soon</p>
            </div>
            <div className="categories-2">
                <div className="categories-2-language">
                    {/* <label>English</label> */}
                    <select>
                        <option>English</option>
                        <option>Russian</option>
                        <option>Spanish</option>
                    </select>
                    {/* <span><CategorieLogo/></span> */}
                </div>
                <div className="categories-2-money">
                    {/* <label>$USD</label> */}
                    <select >
                        <option>$ USD</option>
                        <option>$ EUR</option>
                        <option>$ AZN</option>
                        <option>$ RUB</option>
                    </select>
                    {/* <span><CategorieLogo/></span> */}
                </div>
                <div className="categories-3">
                    <span>USD$0.00</span>
                    <span>0</span>
                    <span><SebetLogo /></span>
                </div>
          
            </div>
        </div>
    )
}

export default Categories