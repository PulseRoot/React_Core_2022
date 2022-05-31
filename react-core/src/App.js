import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Partner from './components/pages/Partner';
import Shop from './components/pages/Shop'
import Info from './components/pages/Info';
import Info_jg from './components/pages/Info_jg';
import Info_kak from './components/pages/Info_kak';
import Info_kb from './components/pages/Info_kb';
import Info_kn from './components/pages/Info_kn';
import Info_sb from './components/pages/Info_sb';
import CenterItem from './components/CenterItem';
import CenterDetail from './components/pages/CenterDetail'
import { Component } from "react"; 
import Write from './components/pages/Write';
import View from './components/pages/View';
import View2 from './components/pages/View2';
import View3 from './components/pages/View3';
import View4 from './components/pages/View4';
import View5 from './components/pages/View5';

class App extends Component {
  state = { 
    isModifyMode: false, 
    isComplete: true,
    boardId: 0, 
}; 
/** * @param {any} checkList */ 
handleModify = (checkList: any) => { 
    if (checkList.length == 0) { 
        alert("수정할 게시글을 선택하세요.");
    } else if (checkList.length > 1) { 
        alert("하나의 게시글만 선택하세요."); 
    } 
    this.setState({ 
        isModifyMode: checkList.length == 1, 
    }); 
    this.setState({ 
        boardId: checkList[0] || 0, 
    }); 
};
handleCancel = () => { 
  this.setState({ 
      isModifyMode: false, 
      isComplete: false, 
      boardId: 0, 
  }); 
};
renderComplete = () => { 
  this.setState({ 
      isComplete: true,
   }); 
};    
/** * @return {Component} Component */ 
render() { 
    return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/partner' element={<Partner/>}></Route>
          <Route exact path='/shop' element={<Shop/>}></Route>
          <Route exact path='/info' element={<Info/>}></Route>
          <Route exact path='/view/1' element={<View/>}></Route>
          <Route exact path='/view/2' element={<View2/>}></Route>
          <Route exact path='/view/3' element={<View3/>}></Route>
          <Route exact path='/view/4' element={<View4/>}></Route>
          <Route exact path='/view/5' element={<View5/>}></Route>
          <Route exact path='/info/all' element={<Info/>}></Route>
          <Route exact path='/info/kak' element={<Info_kak/>}></Route>
          <Route exact path='/info/sb' element={<Info_sb/>}></Route>
          <Route exact path='/info/kn' element={<Info_kn/>}></Route>
          <Route exact path='/info/kb' element={<Info_kb/>}></Route>
          <Route exact path='/info/jg' element={<Info_jg/>}></Route>
          
          <Route exact path='/getAnyGym/id/' component={CenterItem}></Route>
          <Route exact path='/getAnyGym/:id' element={<CenterDetail/>}></Route>
          <Route exact path='/services' element={<Services isComplete={this.state.isComplete}
              handleModify={this.handleModify}
              renderComplete={this.renderComplete}/>}></Route>
          <Route exact path='/write' element={<Write isModifyMode={this.state.isModifyMode}
                boardId={this.state.boardId}
                handleCancel={this.handleCancel}/>}></Route>
        </Routes>
      </Router>
      </> 
    ); 
} 
} 

export default App;