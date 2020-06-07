import React, { Component } from 'react';
//コネクト関数を追加
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'


//propsは関数に渡せる値。stateはコンポーネントで持っている値。関数側で引数にする。
//const App = () => (<Counter></Counter>)
//消す！代わりに、したのcounterをAppに変更。
//ここ。
class EventsIndex extends Component {
  //コンポーネントがマウントされたときに呼ばれるメソッド
  //componenteDidMount(){}
  //
  //下記の処理は、レデューサーで行うのでいらない。
  //constructor(props){//インスタンス初期化時に動く。propsを受け取れる。
  //  super(props)
    //console.log(this.state)
   // this.state = { count:0 }
  //}

  /*この処理もアクションクリエイターで実施するので削除
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
  */

  //counterには、レデューサーのカウンター内のオブジェクトの値。
  render(){
    const props = this.props
    console.log("this.propsの中身");
    console.log(props);//ここにはオブジェクトが入ってる。
      return(
      <React.Fragment>
        <div>counter:{props.value}</div>
        <button onClick={props.increment}> +1</button>
        <button onClick={props.decrement}> -1</button>
      </React.Fragment>
    )
  }
}

//mapStateToPropsは、stateの情報から、componentに必要な情報を受け渡す
const mapStateToProps = state => ({ value:state.count.value})
//アクションが実行された時に、該当のアクションを渡し、状態遷移をさせるのがディスパッチ
//const mapDispatchToProps = dispatch => ({
//  increment: () => dispatch(increment()),
//  decrement: () => dispatch(decrement())
//})

const mapDispatchToProps = ({ increment, decrement})

//この記述でstoreと描写側がつながるらしい。
export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)


