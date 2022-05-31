import React from 'react';
import {Link} from 'react-router-dom';
import './Centers.css';

//아마 여기다가 작성하면 될 듯함.

function CenterItem(props) {
  return (
      <>
        <li className='center__list'>
          <Link to={props.path}>
          <div>
              <figure data-category={props.label}>
              
                    <img className='centers__item__img'
                    alt=''
                    src={props.src}
                    />
              
              </figure>
              </div>
          </Link>
              <div>
                  <h4>{props.text}</h4>
                  <h5>{props.text2}</h5>
                  <hr></hr>
              </div>
        </li>
      </>
  );
}

export default CenterItem;