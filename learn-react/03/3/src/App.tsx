import cat from "./assets/images/cat-with-leaf.jpg"
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";


function App() {

  return (
    <>
      <h1 className="nanum-pen-script-regular">App Component</h1>
      <h1 className="Noto Sans KR">App Component</h1>
      <h1 className="bagel-fat">빵순이라면 지나칠 수 없지</h1>
      <h1 className="doldam">혼저옵서예</h1>
      <div className="bg"></div>
      <div style={{
        width: "100%",
        height: "300px",
        background: `url('/images/cat-with-leaf.jpg) no-repeat center`
      }}></div>
      <img src={cat}></img>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
