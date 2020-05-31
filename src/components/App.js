import React, { Component } from 'react';


//propsは関数に渡せる値。stateはコンポーネントで持っている値。関数側で引数にする。
const App = () => (<Counter></Counter>)


//関数コンポーネント。クラスでの書き方
class Counter extends Component {
  constructor(props){//インスタンス初期化時に動く。propsを受け取れる。
    super(props)
    //console.log(this.state)
    this.state = { count:0 }
  }

  handlePlusButton = () =>{
    console.log("プラス");
    //stateをかえるには、必ずsetStateを使うこと。
    //setstateと同時にrenderが実施される。
    this.setState({count:this.state.count + 1})
  }

  handleMinusButton = () =>{
    console.log("マイナス");
    //stateをかえるには、必ずsetStateを使うこと。
    //setstateと同時にrenderが実施される。
    this.setState({count:this.state.count - 1})
  }

  render(){
  return(
  <React.Fragment>
  <div>counter:{this.state.count}</div>
  <button onClick={this.handlePlusButton}> +1</button>
  <button onClick={this.handleMinusButton}> -1</button>
  </React.Fragment>

 
  )

  }
}

export default App;
