import React from 'react';
import '../../App.css';
import './Services.css';
import { Component } from "react"; 
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class View extends Component{
    /** * @return {Component} Component */
    render() {
        // eslint-disable-next-line
        return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>게시판</strong>
                <p>자유 게시판: 운동 정보를 공유하는 게시판입니다. </p>
            </div>
            <div className='board_view'>
                <div className="board_view_wrap">
                    <div className="board_view">
                <div className="title">
                    남자 여자 헬스 루틴 운동 순서
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>5</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>qwerty</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2022-06-06</dd>
                    </dl>
                </div>
                <div className="cont">
                    1. 워밍업(5-10분): 본격적인 운동을 시작하기 전, 굳어있는 몸을 풀어주기 위해 간단한 관절운동과 허리운동을 해야 부상의 위험을 줄일 수 있습니다<br/>
                    2. 유산소운동(20-40분):헬스장에 가면 종종 러닝머신만 하는 분들을 볼 수 있는데요,러닝머신 같은 운동은 2-40분 정도만 해도 충분하다는 사실!<br/> 
                    3. 복근운동(10-15분)복근운동은 매일 하는 것이 효과적입니다. 윗몸일으키기나 V업운동 등 하루에 두 가지 정도의 종류를 번갈아가며 해주세요.
                </div>
                </div>
            <div className="bt_wrap">
                <Link to='/services'><Button variant="info" className='on'>목록으로 돌아가기</Button></Link>
            </div>       
            </div>
        </div>
    </div>
            ); 
        } 
    }
     
export default View;