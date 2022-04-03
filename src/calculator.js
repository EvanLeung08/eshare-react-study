import React from "react"

export default class Calculator extends React.Component{

   state = {
        count: 0
   }

   render(){
       return (
       <div>
         <div>计数器:{this.state.count}</div>)
         <button onClick={()=>{
             this.setState({
                 count: this.state.count+1
             })
         }}>+1</button>
       </div>
       )
        }


}