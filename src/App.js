import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [cardCnt, setCardCnt] = useState(0)
  const [appHeight, setAppHeight] = useState(0)
  const [topHeight, setTopHeight] = useState(0)

  let number1 = 10
  let number2 = 20
  let plusNum = number1 + number2
  let cardHeight = appHeight - topHeight
  // let height = window.outerHeight
  
  // let height2 = document.querySelector('.App').offsetHeight
  // setAppHeight(height2)
  // console.log(height2)
  let top = 0

  // function checkHeight(offsetHeight) {
  //   top = offsetHeight
  // }

  function asd(userCount, cardCount, bookCount) {
    console.log('asd')
    console.log(userCount)
    console.log(cardCount)
    console.log(bookCount)
    console.log(userCount + cardCount + bookCount)
  }
  asd(5, 10, 20)


  return (
    <div className='card 1000'>
      <div className='top 100'></div> 자식
      <Top setTopHeight={setTopHeight}></Top> 자식
      <div className='num 50'></div> 자식
      <table className='height2 - top'></table> 자식
      <div className='pagi 50'></div> 자식

<div>부모 cardCnt : {cardCnt}</div>
      <Card cardCnt={cardCnt} setCardCnt={setCardCnt} cardHeight={cardHeight} />
    </div>
  );
}

export default App;






function Top(props) {
  // props.setTopHeight(height)
  let insu = 'ZzangzzangInsu'
  let hanjoo = 'ZzangzzangHanjoo'
  // const height = div.offsetHeight
  // props.checkHeight(height)
  return (
    <>
      <div><p>{insu} S2 {hanjoo}</p></div>
    </>
  )
}







// interface Props {
//   cardCnt: Number
//   setCardCnt: Dispath<SetStateActiopn<number>>
//   ppp?: string
// }

function Card(props) {
  const {setCardCnt, cardCnt} = props
  return (
    <div>
      <button onClick={() => props.setCardCnt(cardCnt + 1)}>자식버튼 {/*{props.ppp ? props.ppp : ''}*/}</button>
    </div>
  )
}