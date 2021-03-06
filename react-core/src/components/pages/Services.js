import '../../App.css';
import './Services.css';
import Table from 'react-bootstrap/Table'
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Write from './Write';
import Axios from "axios";
import React, { useState, useEffect } from 'react';

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
        <td> <Link to={{
            pathname:`/view/${id}`}}>{title}</Link></td> 
        <td>{member_name}</td> 
        <td>{registerDate}</td> 
    </tr> 
  ); 
};

interface IProps { 
  isComplete: boolean; 
  handleModify: any; 
  renderComplete: any; 
}
/** 
 * BoardList class 
 * @param {SS} e 
 */

class Services extends Component<IProps> {
  /** 
   * @param {SS} props
   */
   constructor(props: any) { 
    super(props); 
    this.state = { 
      boardList: [], 
    }; 
  }

  state = { 
    boardList: [],
  }; 
  
  getList = () => { 
    Axios.get("http://localhost:8080/api/getAnyPost", {}) 
      .then((res) => { 
        const { data } = res; 
        this.setState({ 
          boardList: data, 
        });
        this.props.renderComplete();
      }) 
      .catch((e) => { 
        console.error(e); 
      }); 
    };

    /**
     * @param {boolean} checked 
     * @param {any} id 
     */
     onCheckboxChange = (checked: boolean, id: any) => { 
      const list: Array<string> = this.state.checkList.filter((v) => { 
        return v != id; 
      }); 

      if (checked) { 
        list.push(id); 
      } 
      this.setState({ 
        checkList: list, 
      }); 
    };

    componentDidMount() { 
      this.getList(); 
    }

    componentDidUpdate() { 
      if (!this.props.isComplete) { 
        this.getList(); 
      } 
    }
    
  /** 
   * @return {Component} Component 
   */
  render() {
    // eslint-disable-next-line
    const { boardList }: { boardList: any } = this.state;
    return (
      <div className="board_wrap">
        <div className="board_title">
            <strong>?????????</strong>
            <p>?????? ?????????: ?????? ????????? ???????????? ??????????????????. </p>
        </div>
      <Table striped bordered hover className='board_list'> 
        <thead className='top'> 
          <tr>
            <th className='count'>??????</th>  
            <th className='title'>??????</th> 
            <th className='writer'>?????????</th> 
            <th className='date'>?????????</th>
          </tr> 
        </thead> 
      <tbody> 
          {boardList.map((v: any) => { 
            return (
            <Board
              id={v.id}  
              title={v.title} 
              member_name={v.memberName} 
              registerDate={v.createdDate}
              key={v.id}
              props={this}
            />
          ); 
         })}
        </tbody> 
      </Table>
      <div className="bt_wrap">
        <Button variant="info" className='on'><Link to='/write'>?????????</Link></Button> 
        <Button variant="secondary"><Link to='/'>????????????</Link></Button> 
      </div>
    </div>
    ); 
  } 
} 

export default Services;

