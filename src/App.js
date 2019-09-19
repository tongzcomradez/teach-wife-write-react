import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 100,
        justifyContent: 'center',
        background: 'black',
      }}
    >
      <img
        src={logo}
        style={{
          height: 100,
        }}
      />
      <h1 style={{ color: 'white' }}>ผลการเล่น</h1>
    </div>
  )
}

const Content = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Answer />
      <List />
    </div>
  )
}

const Answer = () => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AnswerHeader />
      <AnswerContent />
    </div>
  )
}

const AnswerHeader = () => {
  return (
    <div
      style={{
        background: 'cyan',
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <h3> ข้อที่ 1/ 6</h3>
    </div>
  )
}

const AnswerContent = () => {
  return (
    <div
      style={{
        background: 'black',
        border: '2px solid cyan',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h3
        style={{
          color: 'white',
        }}
      >เฉลย</h3>
      <h1
        style={{
          color: 'white',
        }}
      >99.999</h1>
    </div>
  )
}

const List = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div
      style={{
        flex: 1,
        background: 'grey',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        overflow: 'auto'
      }}
    >


      <ListItem selected={selected} setSelected={setSelected} />
    </div>
  )
}

const ListItem = ({ selected, setSelected }) => {
  const arr = []
  for (let i = 0; i <= 30; i++) {
    arr.push(<Item i={i} setSelected={setSelected} selected={selected === i} />)
  }
  return arr
}

const Item = ({ i, selected, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(i)}
      style={{
        border: '1px solid black',
        cursor: 'pointer',
        display: 'flex',
      }}
    >
      <h4 style={{
          color: 'white',
        }}
      > 1 </h4>
      <img
        src={logo}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>name { selected ? 'selected' : '' }</div>

        <div style={{
            display: 'flex',
          }}>

          <div style={{
            flex: 1,
          }}>
            <div>คะแนนรวม</div>
            <div>1000</div>
          </div>

          <div style={{
            flex: 1,
          }}>
            <div>ใช้เวลาตอบรวม</div>
            <div>00:00:00 ms</div>

          </div>

        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default App
