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
                    40대 헬린이 질문이 있습니다
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>3</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>okky</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2022-06-02</dd>
                    </dl>
                </div>
                <div className="cont">
                    태어나서 헬스를 처음 해 보는 헬린이 입니다.<br/>
                    체계적인 운동 자체가 처음인 아저씨 인데... 건강문제로 하체 운동은 물리적으로 가능한 운동보다 불가능한 운동이 많아 상체 운동위주로하고 있는데 인바디 결과 근육을 늘려야 한다는 말을 들었습니다.<br/> 
                    처음 시작한 헬스다 보니 1주일째 기구도 잘 못 다루면서 무작정 달리는 중인데.. 문제는 저는 근육을 키워야 하는 입장이다 보니 프로틴? 단백질? 이런것들을 먹는게 도움이 될지 궁금해서 여쭤보러 합니다.
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