import React from "react"

export default class Event extends React.Component{

    clickHandle(e){
        console.info("点击事件发生了")
    }

    render(){
        return <button onClick={this.clickHandle} />;
    }

}