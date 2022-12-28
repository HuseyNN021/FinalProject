import axios from "axios";
import React, { useState } from "react";
import './Input.css'
import { BookUrl } from '../services/db'


function Input({listBook,setListBook}) {
    let [search, setSearch] = useState('')
    const searchBook = (evt) => {
        if (evt.key === 'Enter') {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDPOJxc0jJ7_7wCv0YpIQXEZng8EA4I3Qs`).then(res => {
                console.log(res.data.items);
                setSearch(res.data.items)
                setListBook(res.data.items)
            }).catch(err => console.log(err))
        }
    }

    return (
        <div className="search">
            <h1>BookSpace</h1>
            <div className="search_book">
                <input type='text' 
                    onChange={e => { setSearch(e.target.value) }}
                    onKeyPress={searchBook}
                />
                <button className="search_button">Search</button>
                <button className="advenced_button">Advanced Search</button>
            </div>
        </div>
    )
}
export default Input