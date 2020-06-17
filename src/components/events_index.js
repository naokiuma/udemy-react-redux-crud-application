import React, { Component } from 'react';
//コネクト関数を追加
import { connect } from 'react-redux'
import { readEvents } from '../actions'
//いろいろな関数を使えるlodash
import _ from 'lodash'
//リンクパーツを設定でいるよ
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
}from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'



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
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  //counterには、レデューサーのカウンター内のオブジェクトの値。
  render(){
    const style = {
      position:"fixed",
      right:20,
      bottom:20
    }
    //console.log("this.propsの中身");
    //console.log(props);//ここにはオブジェクトが入ってる。
      return(
        <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new"/>}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader
          //全選択のチェックボックスを外す
          displaySelectAll={ false }
          //全選択のチェックボックス分、ずれている内容を直す
          adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
        
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


