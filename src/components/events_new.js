import React, { Component } from 'react';
//コネクト関数を追加
import { connect } from 'react-redux'
//import { readEvents } from '../actions'
//リンクパーツを設定でいるよ
import { Link } from 'react-router-dom'
//import { postEvent } from '../actions

//もともと、event.indexをコピーしたデータ
class EventsNew extends Component {

  render(){
      return(
        <React.Fragment>
          <div>foo</div>
        </React.Fragment>

    )
  }
}


//const mapDispatchToProps = ({ postEvent })

//この記述でstoreと描写側がつながるらしい。
export default connect(null,null)(EventsNew)


