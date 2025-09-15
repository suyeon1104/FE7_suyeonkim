// 클래스형 컴포넌트
// class ClassApp extends React.Component {
//   render(): React.ReactNode {
//     return <h1>Hello, World(With Class Components)</h1>
//   }
// }
// export default App;

import Article from './components/Article';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';

// 함수형 컴포넌트
export default function App () {
  const name = "kim";
  return(
    <>
    {/* 하하하 */}
      <h1 className="ddd" data-id="1212">
        App Component
        </h1>
      <label htmlFor="email">email</label>
      <input id="email" type="text" readOnly/>
      <h1>999 * 999 = {999 * 999}</h1>
      <h2 style={{
        color: "red",
      }}>name: {name}</h2>
      <Header/>
      <Nav/>
      <Article/>
      <Section/>
      <Aside/>
      <Footer/>
    </>
  )
  // return React.createElement("div", null, React.createElement("h1", null, "Hello, React!"));
}

