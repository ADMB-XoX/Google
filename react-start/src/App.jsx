import { useEffect, useState } from 'react';
import './App.css'
import Person from './components/Person';
import { useNavigate } from 'react-router-dom';
import Google from './images/Google.png';
import dots from './images/dots.png';
import glass from './images/glass.png';
import keyboard from './images/keyboard.png'

function App() {

  return (
    <div className='body'>

      <nav className='head'>
        <header1 className='header1'>
          <ul>
            <li>Google 정보</li>
            <li>스토어</li>
          </ul>
        </header1>        
        <header2 className='header2'>
          <ul>
            <li>Gmail</li>
            <li>이미지</li>
            <li><img className='dots' src={dots}></img></li>
            <li><div className='login'>로그인</div></li>
          </ul>
        </header2>
      </nav>
      <div className='center'>
        <img className='logo' src={Google} alt=''/>
        <div className='search'>
          <div>
          <img className='glass' src={glass} />
          </div>
          <div>
            <img className='keyboard' src={keyboard} />
            <img className='mike' src={keyboard} />
            <img className='camera' src={keyboard} />
          </div>
        </div>
        <div className='centerbutton'>
          <div className='button'>Google 검색</div>
          <div className='button'>I'm Feeling Lucky</div>
        </div>
      </div>
    </div>
  );

}

export default App
