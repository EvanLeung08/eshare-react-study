import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './hello'
import Event from './event.js'
import Calculator from './calculator';


//1.测试自定义组件
// ReactDOM.render(
//  <Hello/>,
//   document.getElementById('root')
// );


//2.测试绑定事件
// ReactDOM.render(<Event text='点我'/>,document.getElementById('root'))

// function Event1(){
//   function clickHandle(e){
//     console.info("快点来点我!!!");
//   }

//   return (<button onClick={clickHandle}/>)
// }

//ReactDOM.render(<Event1 text='点我'/>,document.getElementById('root'))

//3.操作原生事件对象
function EventTest(){
  function clickHandle(e){
    e.preventDefault()
    console.info("来点点我!!!")
  }
  return (<a href='www.baidu.com' onClick={clickHandle}>哈哈哈哈，点我啊</a>)
}


//ReactDOM.render(<EventTest/>,document.getElementById('root'))

//4.操作类数据
ReactDOM.render(<Calculator/>, document.getElementById('root'))