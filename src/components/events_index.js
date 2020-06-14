import React, { Component } from 'react';
//コネクト関数を追加
import { connect } from 'react-redux'
import { readEvents } from '../actions'
//いろいろな関数を使えるlodash
import _ from 'lodash'
//リンクパーツを設定でいるよ
import { Link } from 'react-router-dom'


//propsは関数に渡せる値。stateはコンポーネントで持っている値。関数側で引数にする。
//const App = () => (<Counter></Counter>)
//消す！代わりに、したのcounterをAppに変更。
//ここ。
class EventsIndex extends Component {
  //コンポーネントがマウントされたときに呼ばれるメソッド。
  //このコンポーネントが起動したときにアクションをよび、apiを取得しよう。
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event =>(
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  //counterには、レデューサーのカウンター内のオブジェクトの値。
  render(){
    //console.log("this.propsの中身");
    //console.log(props);//ここにはオブジェクトが入ってる。
      return(
        <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
        </React.Fragment>

    )
  }
}

//mapStateToPropsは、stateの情報から、componentに必要な情報を受け渡す
const mapStateToProps = state => ({ events:state.events })
//アクションが実行された時に、該当のアクションを渡し、状態遷移をさせるのがディスパッチ
//const mapDispatchToProps = dispatch => ({
//  increment: () => dispatch(increment()),
//  decrement: () => dispatch(decrement())
//})

//こっちもreadiventにしてしまいましょう
const mapDispatchToProps = ({ readEvents })

//この記述でstoreと描写側がつながるらしい。
export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)


