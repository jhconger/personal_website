import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";

//
// const useBackListener = (callback) => {
//
//
//     useEffect(() => {
//         const listener = ({ location, action }) => {
//             console.log("listener", { location, action });
//             if (action === "POP") {
//                 callback({ location, action });
//             }
//         };
//
//         const unlisten = navigator.listen(listener);
//         return unlisten;
//     }, [callback, navigator]);
// };


function CardItem(props) {
    return (
        <>
            <li className='cards__item' >
                <a href={props.path} className="cards__item__link" rel="noopener noreferrer">

                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Web Dev Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>

                </a>
            </li>
        </>
    );
}

export default CardItem;