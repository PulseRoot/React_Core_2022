import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import DetailItem from './DetailItem';
import './Detail.css';

function Detail() {
    const Location = useLocation().pathname;
    let [Center, setCenter] = useState([]);
    let results = []

    function DetailCall() {
        const url = Location;
        axios.get("http://localhost:3000/api" + url)
        .then(function(response) {
            setCenter(response.data);
            console.log(response);
        })
        .catch(function(error) {
            console.log("실패");
        })
        if(1){
                  results.push(
                    <DetailItem  key={Center.id}
                    src={Center.imgUrl}
                    text= {Center.name} 
                    text2={Center.price} 
                    label={Center.location}
                    text3={Center.description}
                    />
                  )
               
         return results   
      }
    }
    return(
        <>
        <h1>헬스장 상세 정보</h1>
        <div className="detail__main__div">
        <ul className='ul_detail'>
            {DetailCall()}
        </ul>
        </div>
       </>
        );
    }

export default Detail;    