import React from 'react';
import {Link} from 'react-router-dom';
import './Detail.css';

//아마 여기다가 작성하면 될 듯함.

function DetailItem(props) {
  return (
      <>
        <li>
          <div>
                 <img className='detail__item__img'
                    alt=''
                    src={props.src}
                  />
              </div>
              <div>
                  <h2>헬스장 이름 : {props.text}</h2>
                  <hr></hr>
                  <h3>가격(원)/월 : {props.text2}</h3>
                  <hr></hr>
                  <h3>지역 : {props.label}</h3>
                  <hr></hr>
                  <h3>설명 : {props.text3}</h3>
                  <hr></hr>
              </div>
        </li>
      </>
  );
}

export default DetailItem;