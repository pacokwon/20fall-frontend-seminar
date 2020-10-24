import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      <ul>
        <li>
          <Link to="/counter">
            Counter 컴포넌트
          </Link>
        </li>
        <li>
          <Link to="/dogs">
            API 요청을 통해 데이터 불러오기
          </Link>
        </li>
        <li>
          <Link to="/dogslist">
            Dogs List
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
