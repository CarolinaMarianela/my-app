// import React from 'react';
// import './card.css';
// import Mock from '../../mock/response.json';

// const Card = (props) => {
// const { title, image, onClick } = props;
// return(
//     <div>
//         <img src={image}/>
//     </div>
// );
// };
// export default Card;

import React from 'react';
import './card.css';
//import Mock from '../../mock/response.json';

const Card = ({ item }) => (
  <a target="_blank" href={item.url} className="card-container" style={{ backgroundImage: `url(${item.imageUrl })` }}>
    <div>
      {/* <p><b>{item.title}</b></p> */}
      {/* <img className="image-container" src={item.imageUrl}/>     */}
    </div>
  </a>
);

export default Card;
