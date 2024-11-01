import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 상태!!=그지 사용자와의 인터렉션에 필요한 정보
//상태,,,그지같은거... 상태가 변하면 화면이 다시 랜더링됨
//리엑트가 다시 랜더링됨..?
//데이터를 저장할 변수 같은 느낌?
// 오오  let age=30;
//age=32
//고런 느낌 값을 변경해주는 데이터를 저장할 변수,,,