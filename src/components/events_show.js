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
  //await this.props.postEvent(values)
  this.props.history.push('/')
}


  render(){
    //renderが実行された時に渡ってくる関数。prinstineは何も入力していない状態を示す。
    const { handleSubmit,pristine,submitting } = this.props
    console.log(submitting)
    return(
    <form onSubmit={handleSubmit(this.onSubmit)}>
      <div><Field label="Title"  name="title" type="text" component={this.renderField} /> </div>
      <div><Field label="Body"  name="body" type="text" component={this.renderField} /> </div>
      <div>
        <input type="submit" value="Submit" disable={pristine || pristine} />
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


const mapDispatchToProps = ({ deleteEvent })
//この記述でstoreと描写側がつながる。
//postEventもここでこのコンポーネントに関連づくアクションだと指定する必要がある。
export default connect(null,mapDispatchToProps)(
  reduxForm({ validate, form : 'eventShowForm' })(EventsShow)
)

