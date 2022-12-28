// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

// const Example = () => {
//     const images = [
//         "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//         "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//         "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     ];

//     return (
//         <Slide>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[0]})` }}>
//                     <span>Slide 1</span>
//                 </div>
//             </div>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[1]})` }}>
//                     <span>Slide 2</span>
//                 </div>
//             </div>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[2]})` }}>
//                     <span>Slide 3</span>
//                 </div>
//             </div>
//         </Slide>
//     );
// };

// export default Example;




import React from "react";
import './BestSelling.css'
import LeftButtonLogo from "./icon/LeftButtonLogo";
import RightButtonLogo from "./icon/RigthButtonLogo";


function BestSelling() {
    return (
        <div className="Bestselling">
            <h2>Bestselling books</h2>
            <div className="BestBooks">
                <span className="lef"t> <LeftButtonLogo/> </span>
                <div className="books">
                    <div className="book1">
                        <h3>What I Learned from the Trees</h3>
                        <h2>L.E. Bowman</h2>
                        <img src="https://www.booktopia.com.au/covers/big/9781638340065/7810/what-i-learned-from-the-trees.jpg"></img>
                        <p>USD$25.00</p>
                        <button>Order</button>
                    </div>
                    <div className="book1">
                        <h3>Thief River Falls</h3>
                        <h2>Brian Freeman</h2>
                        <img src="https://m.media-amazon.com/images/I/5121qEQkIgL.jpg"></img>
                        <p>USD$10.54</p>
                        <button>Order</button>
                    </div>
                    <div className="book1">
                        <h3>If It Bleeds</h3>
                        <h2>Stephen King</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/en/2/24/If_It_Bleeds_%28Stephen_King%29.png"></img>
                        <p>USD$13.57</p>
                        <button>Order</button>
                    </div>
                </div>
                <span className="right"><RightButtonLogo/>  </span>
            </div>
        </div>
    )
}
export default BestSelling