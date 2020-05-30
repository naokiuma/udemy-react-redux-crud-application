import React, { Component } from 'react';

/*
//クラスコンポーネント
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <h1>見出しです。</h1>
      <p>本文です</p>
      </React.Fragment>
    )
  }
}
*/

const App =() =>{
  return(
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}
//関数コンポーネント
const Cat = () =>{
  return <div>にゃー!</div>
}

export default App;
