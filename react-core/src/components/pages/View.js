import React from 'react';
import '../../App.css';
import './Services.css';
import { Component } from "react"; 
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Board = ({ 
    id, 
    title, 
    member_name, 
    registerDate,
    props
  }: { 
    id: number; 
    title: string; 
    member_name: string; 
    registerDate: string;
    props: any;
  }) => { 
    return ( 
      <tr> 
          <td>{id}</td>
          <td>{title}</td> 
          <td>{member_name}</td> 
          <td>{registerDate}</td> 
      </tr> 
    ); 
  };
  
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
                    닭가슴살 말고 연어 먹어도 되나요?
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>1</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>ttf1234</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2022-05-29</dd>
                    </dl>
                </div>
                <div className="cont">
                닭가슴살이 너무 뻑뻑하고 맛이 없어서 연어를 먹으려고 하는데 연어를 먹어도 근육 만드는데 도움이 되나요?
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