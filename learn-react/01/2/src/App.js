// create-react-app
// 페이스북,

// javascript가 아님
// JSX(Javscript + XML) 확장 문법법
// 페이스북 개발
// 확장자가 .js?

// 뜨거운 감자 (핫이슈)
// JSX -> .js ???
// JSX -> Javascript (트랜스파일)
// 그래서 상관없다 vs 아니다. 그래도 이건 아니다.

// 현대 트렌드 흐름상 -> jsx (JSX)

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
