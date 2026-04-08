import './App.css';   //전역 CSS
import style from './App.module.css'; 
import Body from './components/Body.jsx';
import Parent from './components/Parent.jsx';
import Child from './components/Child.jsx';



function App() {

  return (   //화면에 출력하는 것이 있다.
    <>
      <h1>Hello~ React!!</h1>
      <button className={style.button}>App::클릭하세요</button>
      <Body />
      <Parent name="홍길동 아버지" />
    </>
  )
}

export default App
