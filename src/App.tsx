import st1 from './image/st1.jpg'
import st2 from './image/st2.jpg'
import st3 from './image/st3.jpg'
import st4 from './image/st4.jpg'
import st5 from './image/st5.jpg'
import st6 from './image/st6.jpg'
import st7 from './image/st7.jpg'
import st8 from './image/st8.jpg'
import { useState } from 'react';
import './App.css';

function randomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {


  const [state, setState] = useState(
    {
      index: -1,
      imgList: [st1, st2, st3, st4, st5, st6, st7, st8]
    }
  );

  const click = () => {
    if (state.index + 1 === state.imgList.length) {
      setState({ index: 0, imgList: [st1, st2, st3, st4, st5, st6, st7, st8] })
    } else {
      setState({ index: randomNumberInRange(0, 7), imgList: [st1, st2, st3, st4, st5, st6, st7, st8] })
    }
  }

  return (
    <div className="App">
      <button className='botao' onClick={click}>Clique aqui</button>
      <img className='imagem' src={state.imgList[state.index]} alt="Imagens do leleo e sua turminha" />
    </div>
  );
}

export default App;
