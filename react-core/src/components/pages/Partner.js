import React from 'react';
import '../../App.css';
import { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";
import axios from 'axios';
import './Partner.css';
import person1 from '../../images/person1.jpg'
import person2 from '../../images/person2.jpg'
import person3 from '../../images/person3.jpg'
import person4 from '../../images/person4.jpg'
import person5 from '../../images/person5.jpg'
import person6 from '../../images/person6.jpg'

function Partner(){
  return (
    <>
    <div className="board_wrap">
        <div className="board_title">
            <strong>우리동네 파트너 찾기</strong>
            <p>조건에 맞는 파트너를 찾아보세요! </p>
        </div>
        <div class="menu-box">
        <nav id="primary_nav_wrap">
        <ul>
          <li class="current-menu-item"><a href="#">지역</a>
            <ul>
              <li><a href="#">모든 지역</a></li>
              <li><a href="#">관악구</a></li>
              <li><a href="#">성북구</a></li>
              <li><a href="#">강남구</a></li>
              <li><a href="#">중구</a></li>
              <li><a href="#">강북구</a></li>
            </ul>
          </li>
          <li><a href="#">성별</a>
            <ul>
              <li><a href="#">남자</a></li>
              <li><a href="#">여자</a></li>
            </ul>
          </li>
          <li><a href="#">나이대</a>
            <ul>
              <li><a href="#">10대</a></li>
              <li><a href="#">20대</a></li>
              <li><a href="#">30대</a></li>
              <li><a href="#">40대</a></li>
              <li><a href="#">50대</a></li>
              <li><a href="#">60대</a></li>
            </ul>
          </li>
          <li><a href="#">Level</a>
            <ul>
              <li class="dir"><a href="#">LEVEL1(운동경험1개월 미만)</a></li>
              <li class="dir"><a href="#">LEVEL2(운동경험 6개월 미만)</a></li>
              <li><a href="#">LEVEL3(운동경험 1년 미만)</a></li>
              <li><a href="#">LEVEL4(운동경험 2년 미만)</a></li>
              <li><a href="#">LEVEL5(운동경험 3년 이상)</a></li>
            </ul>
          </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className='match'>
    <main class="deals">
        <article class="sale-item">
          <h1>ID: 튼튼해GYM</h1>
          <p>주5회 운동합니다.<br/>같이 운동하실 헬창 파트너 구해요</p>
          <ul>
            <li>지역: 관악구</li>
            <li>나이대: 50대</li>
            <li>LEVEL: 5</li>
          </ul>
          <img src={person1}/>
          <button className='button1'>♡Likes</button>
          <button className='button2'>선택하기</button>
        </article>
        
        <article class="sale-item">
          <h1>ID: health_good</h1>
          <p>주2~3회 운동하구 필라테스도 좋아해요~<br/>꾸준히 하실분 구해요!</p>
          <ul>
            <li>지역: 강남구</li>
            <li>나이대: 20대</li>
            <li>LEVEL: 2</li>
          </ul>
          <img src={person2}/>
          <button className='button1'>♡Likes</button>
          <button className='button2'>선택하기</button>
        </article>

        <article class="sale-item">
          <h1>ID: 신라면건면</h1>
          <p>주3~4회 운동해요! 여자분만 구해요~<br/>중구 사시는 분이었으면 좋겠어요~</p>
          <ul>
            <li>지역: 중구</li>
            <li>나이대: 20대</li>
            <li>LEVEL: 3</li>
          </ul>
          <img src={person3}/>
          <button className='button1'>♡Likes</button>
          <button className='button2'>선택하기</button>
        </article>

        <article class="sale-item">
          <h1>ID: 야식은스쿼트</h1>
          <p>야식은 스쿼트죠!<br/>주2회 운동하실 분 구합니다.</p>
          <ul>
            <li>지역: 성북구</li>
            <li>나이대: 40대</li>
            <li>LEVEL: 5</li>
          </ul>
          <img src={person4}/>
          <button className='button1'>♡Likes</button>
          <button className='button2'>선택하기</button>
        </article>

        <article class="sale-item">
          <h1>ID: 헬린이1234</h1>
          <p>운동한지 한달된 헬린이에요..<br/>저랑 같이 운동하실 분?</p>
          <ul>
            <li>지역: 강북구</li>
            <li>나이대: 30대</li>
            <li>LEVEL: 2</li>
          </ul>          
          <img src={person5}/>
          <button className='button1'>♡Likes</button>
          <button className='button2'>선택하기</button>
        </article>
        <article class="sale-item">
          <h1>ID: 운동은어려워</h1>
          <p>운동하는 방법 알려주실 헬창 파트너분 구해요</p>
          <ul>
            <li>지역: 강남구</li>
            <li>나이대: 50대</li>
            <li>LEVEL: 1</li>
          </ul>
          <img src={person6}/>
          <button className='button1'>♡Likes</button>
          <button className='button2'>선택하기</button>
        </article>
      </main>
      </div>
        </>
  );
}
export default Partner;