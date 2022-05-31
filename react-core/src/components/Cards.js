import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'

function Cards() {
    return (
      <div className='cards'>
        <h1>우리동네 헬스장을 찾아보세요!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={img1}
                text='스포애니 관악점'
                label='관악구'
                path='/services'
              />
              <CardItem
                src={img2}
                text='파크짐 동대문점'
                label='동대문'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={img3}
                text='엠비휘트니스'
                label='신당동'
                path='/services'
              />
              <CardItem
                src={img4}
                text='을지휘트니스'
                label='을지로'
                path='/partner'
              />
              <CardItem
                src={img5}
                text='파고다헬스클럽'
                label='수표로26길'
                path='/shop'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;