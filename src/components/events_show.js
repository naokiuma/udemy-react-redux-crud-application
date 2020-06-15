import React, { Component } from 'react';
//コネクト関数を追加
import { connect } from 'react-redux'
//import { readEvents } from '../actions'
//リンクパーツを設定でいるよ
import { Field,reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
//取得、削除、更新イベントを取得。
import { getEvent,deleteEvent,putEvent } from '../actions'

//もともと、event.newをコピーしたデータ
class EventsShow extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

//レンダリングが完成したら、適時情報をapiからとってくれう
componentDidMount(){
  const { id } = this.props.match.params
  if(id) this.props.getEvent(id)
}

//https://redux-form.com/7.3.0/docs/api/field.md/ redux-formのfieldを見る
  //下の方で使ってる。
  //toucehdは一回でもフォームに触った時のメタ情報。この情報を見て、エラーの文言を制御する
    renderField(field){
      const { input, label, type, meta:{ touched, error } } = field
      return (
      <div>
        <input { ...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>} 
      </div>
      )
    }
//メモ、上のtouchedしばらく書くとこ間違えてた


async onDeleteClick(){
  //どんなパラメータなのかをmatchでひろう
  //console.log(this.props.match)
  const { id } = this.props.match.params
  console.log(id)
  await this.props.deleteEvent(id)
  this.props.history.push('/')
}
//外部のアクションで呼び出したアクションクリエイタのposteventで、historyに履歴を渡している
async onSubmit(values){
  //上で読み込んでいるpostEventに値を渡す。
  await this.props.putEvent(values)
  this.props.history.push('/')
}


  render(){
    //renderが実行された時に渡ってくる関数。pristineは何も入力していない状態を示す。
    //https://qiita.com/macotok/items/672541aa514e3c6c0e05
    const { handleSubmit,pristine,submitting,invalid } = this.props
    //console.log(submitting)
    return(
    <form onSubmit={handleSubmit(this.onSubmit)}>
      <div><Field label="Title"  name="title" type="text" component={this.renderField} /> </div>
      <div><Field label="Body"  name="body" type="text" component={this.renderField} /> </div>
      <div>
        <input type="submit" value="Submit" disable={pristine || submitting || invalid} />
        <Link to="/" >Cancel</Link>
        <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
      </div>

    </form>  

  )
 }
}

const validate = values => {
  const errors = {}

  //もし値のタイトルがない場合、タイトルにエラーを出す
  if (!values.title) errors.title = "タイトルを入れてください。"
  if (!values.body) errors.body = "本文を入れてください。"
  return errors
}

//レデューサーのイベントをbindする
//ownProps はコンポーネントが持っているprops、さっき渡ってきたid情報がここにある。
const mapStateToProps = (state,ownProps) =>{
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event,event }
}
const mapDispatchToProps = ({ deleteEvent,getEvent,putEvent })


//この記述でstoreと描写側がつながる。
//postEventもここでこのコンポーネントに関連づくアクションだと指定する必要がある。
export default connect(mapStateToProps,mapDispatchToProps)(
  //enableReinitializeとは?
  //https://redux-form.com/6.0.0-rc.4/docs/api/reduxform.md/
  reduxForm({ validate, form : 'eventShowForm', enableReinitialize:true })(EventsShow)
)

