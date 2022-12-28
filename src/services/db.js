// import axios from 'axios';

// export const getData= async ()=>{
//     const response = await axios.get(`https://www.omdbapi.com/?s=${name}&apikey=99d929d9`);
//     return  response.data.Search;
// }
// import axios from "axios";

// const options = {
//   method: 'POST',
//   url: 'https://books17.p.rapidapi.com/authors/8418015/works',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': 'f1b6be479bmsh686a2f65b56205ap12f576jsne087e4c6e358',
//     'X-RapidAPI-Host': 'books17.p.rapidapi.com'
//   },
//   data: '{"cursor":1}'
// };

// export const book =async ()=>{
//    const answer= axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
// }  

export const BookUrl='https://www.googleapis.com/books/v1/volumes?q=harry%20potter&key=AIzaSyDPOJxc0jJ7_7wCv0YpIQXEZng8EA4I3Qs'