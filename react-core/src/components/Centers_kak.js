import React, { Component } from 'react';
import CenterItem from './CenterItem';
import './Centers.css';
import { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";
import axios from 'axios';


const elementStyle ={
    border:'solid',
    borderRadius:'10px',
    left:'10vh',
    height:'6vh',
    width:'60%',
    marginTop:'5vh',
    marginLeft:'5vh',
    marginBottom:'10vh'
  }
const sub ={
    border:'solid',
    borderRadius:'10px',
    width:"20%",
    height:'5vh',
    marginLeft:'1vh',
}  



function Centers() {
    let [Centers, setCenters] = useState([]);
    let results = []
    function CallList() {
        const url = "/api/getAnyGym";
        axios.get(url)
        .then(function(response) {
            setCenters(response.data);
            console.log(response);
        })
        .catch(function(error) {
            console.log("실패");
        })
        if(Centers.length > 0){
              Centers.map(center => (
                  (center.location == "관악구")? (
                    results.push(<CenterItem className='create_center' key={center.id}
                    src={center.imgUrl}
                    text= {center.name} 
                    text2={center.price} 
                    label={center.location} 
                    path={`/getAnyGym/${center.id}`}
                    />
                    )
                    
                  )
                  :null
              ))  
        }
        let results__ = []
        let _results_ = []
        let cnt = 0;
        while(results.length != 0){
            results__.push(results.pop());
            cnt = cnt + 1;
            if (cnt == 3 & results.length > 1){
                _results_.push(<li className='centers__list'>{results__}</li>)
                results__ = []
                cnt = 0;
            }
            else if(results.length == 1){
                _results_.push(<li className='centers__list'>{results__}</li>)
            }
            
        }    
        return _results_;
    }
   
    
    return (
        <><div>
            <h1>우리동네 헬스장을 찾아보세요!</h1>
          </div>
        
        <div className='center__main__div'>
                    <div className='div_left'>  
                        <form action='/center_search' method='POST'>      
                        <input type="text" name='center_search' style={elementStyle}/>
                        <input type="submit" value="search" style={sub}></input>
                        </form>
                        <div className="App">
                            <div className="container">
                                <input id="dropdown" type="checkbox" />
                                <label className="dropdownLabel" for="dropdown">
                                <div>Location</div>
                                <FaAngleDown className="caretIcon" />
                                </label>
                                <div className="content">
                                <ul>
                                    <li><a href='/info/all'>모든 지역</a></li>
                                    <li><a href='/info/kak'>관악구</a></li>
                                    <li><a href='/info/sb'>성북구</a></li>
                                    <li><a href='/info/kn'>강남구</a></li>
                                    <li><a href='/info/jg'>중구</a></li>
                                    <li><a href='/info/kb'>강북구</a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                    </div>
        </div>
                    <div className='create_center'>
                        <ul className='centers__items'>
                       
                        <li>
                        {CallList()}
                        </li>

                        </ul>
                    </div>
            </>
    );
  }
  
  export default Centers;