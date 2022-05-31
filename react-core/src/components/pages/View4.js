import React from 'react';
import '../../App.css';
import './Services.css';
import { Component } from "react"; 
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class View extends Component{
    constructor(props: any) { 
        super(props); 
        this.state = { 
          boardList: [], 
        }; 
      }
      state = { 
        boardList: [],
      };
    /** * @return {Component} Component */
    render() {
        // eslint-disable-next-line
        const { boardList }: { boardList: any } = this.state;
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
                    오랜만에 운동...
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>4</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>졸린곰</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2022-06-05</dd>
                    </dl>
                </div>
                <div className="cont">
                 2022-06-05 목요일<br/>
                오늘의 운동:<br/>
                스트래칭 20분 암풀다운5세트 10회<br/>
                로우머신 5세트 10회<br/>
                랫풀다운 5세트 10회<br/> 
                랫풀다운(그립 좁은거) 5세트 10회 <br/>
                케이블로우5세트 10회 <br/>
                덤벨로우 5세트 10회<br/>
                데드리프트 4세트 5회<br/> 
                풀업머신(풀업) 3세트 5회 2세트 8회<br/> 
                풀업머신(친업) 3세트 8회<br/>
                암풀다운 5세트 10회<br/>
                오랜만에 하니깐 2시간 걸리더라고요<br/> 
                작년에는 1시간 30분정도 걸린 거 같은데 운동할 때 다들 2시간정도 걸리시나요?
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