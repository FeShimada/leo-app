import st1 from './image/st1.jpg'
import st2 from './image/st2.jpg'
import st3 from './image/st3.jpg'
import st4 from './image/st4.jpg'
import st5 from './image/st5.jpg'
import st6 from './image/st6.jpg'
import st7 from './image/st7.jpg'
import st8 from './image/st8.jpg'
import st9 from './image/st9.jpg'
import st10 from './image/st10.jpg'
import st11 from './image/st11.jpg'
import st12 from './image/st12.jpg'
import st13 from './image/st13.jpg'
import st14 from './image/st14.jpg'
import st15 from './image/st15.jpg'
import st16 from './image/st16.jpg'
import st17 from './image/st17.jpg'
import st18 from './image/st18.jpg'
import st19 from './image/st19.jpg'
import st20 from './image/st20.jpg'
import st21 from './image/st21.jpg'
import st22 from './image/st22.jpg'
import st23 from './image/st23.jpg'
import st24 from './image/st24.jpg'
import st25 from './image/st25.jpg'
import st26 from './image/st26.jpg'
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(
    {
      index: -1,
      imgList: [st1, st2, st3, st4, st5, st6, st7, st8, st9, st10, st11, st12, st13, st14, st15, st16, st17, st18, st19, st20, st21, st22, st23, st24, st25, st26]
    }
  );

  const click = () => {
    if (state.index + 1 === state.imgList.length) {
      setState({ index: 0, imgList: [st1, st2, st3, st4, st5, st6, st7, st8, st9, st10, st11, st12, st13, st14, st15, st16, st17, st18, st19, st20, st21, st22, st23, st24, st25, st26] })
    } else {
      let proximo = state.index + 1
      setState({ index: proximo, imgList: [st1, st2, st3, st4, st5, st6, st7, st8, st9, st10, st11, st12, st13, st14, st15, st16, st17, st18, st19, st20, st21, st22, st23, st24, st25, st26] })
    }
  }

  return (
    <div className="App">
      <button className='botao' onClick={click}>Click here and try to find my mom</button>
      <img className='imagem' src={state.imgList[state.index]} alt="Imagens do leleo e sua turminha" />
    </div>
  );
}

export default App;
