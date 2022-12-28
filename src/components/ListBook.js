import  {React, useState, useEffect } from "react";
import { BookUrl } from '../services/db'
import axios from "axios";
import './ListBook.css'

function ListBook({listBook,setListBook}) {
    const [books, setBooks] = useState([])
    console.log(listBook);

    useEffect(() => {
        axios.get(BookUrl).then(res => {
            console.log(res.data.items);
            setBooks(res.data.items)
        }).catch(err => console.log(err))
    }, [])
    listBook?.map((book)=>{
        const h=book.volumeInfo.language
        console.log(h);
    })
   
    return (
        <div className="listShow">
            {listBook?.map((book) => {
                return (
                    <div className="listShowbooks">
                        <h3>{book.volumeInfo.title}</h3>
                        <img src={book.volumeInfo.imageLinks?.thumbnail} alt="alt"></img>
                    </div>
                )

            })}
        </div>
    )
}

export default ListBook