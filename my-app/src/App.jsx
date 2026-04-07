/**
 * 부모 컴포넌트 : 최상위 컴포넌트
 */
import './App.css'
import Header from './components/Header.jsx'

export default function App() {

let name = "홍길동";
let age = 20;
let numbers = [1, 2, 3, 4, 5];
let fruits = {
  name: "apple",
  color: "red",
  emoji: "🍎"
}

  return (  
    <>
      <h1>Welcome to React World!!</h1>
      <Header />
      <ul>
        <li>{name}</li>
        <li>{age+49}</li>
        <li>{numbers}</li>
        <li>{fruits.emoji}</li>
      </ul>
    </>
  )
}