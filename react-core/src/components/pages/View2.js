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
                    초보자를 위한 헬스 꿀팁
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>2</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>헬린이</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2022-06-01</dd>
                    </dl>
                </div>
                <div className="cont">
                운동은 가성비로 바벨로우 같은 운동하지마시고, 풀업 하나로 끝내세요.<br/> 
                무게가 나가시는분들은 랫풀다운 추천<br/>광배활성화는 풀업과 랫풀 차이가 없습니다.<br/> 
                가슴은 벤치(체스트프레스)<br/> 
                마찬가지로 프리웨이트 벤치가 최고지만, 자세잡기 어려우시면 체스트프레스도 좋아요.<br/> 
                초보분들은 빈바나 많아도 40키로 미만으로 자극 중심으로 하세요. 견갑패킹하고 어깨,삼두 개입을 최소화하고 흉근만 사용하는 그런 감을 찾으시길.<br/> 
                물론 개입이 없을 수는 없습니다.
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