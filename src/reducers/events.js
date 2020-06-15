import _ from 'lodash'
import { 
    CREATE_EVENTS,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
 } from '../actions'

//状態をオブジェクトの初期値を定義。
//初期状態のオブジェクトを入れる変数名はinitialState

//const initialState = { value:0 }//初期のカウント
//カウントアプリをやめるのでさくじょ

//関数として定義。引数はstate、acitonとして２つもつ
export default(events = {}, action) => {
    //actionのtype（INCREMENTかDECREMENTか）はaction.typeで拾える
    switch(action.type){
        //こんな感じで複数のtypeを返せる
        case READ_EVENT:
        case CREATE_EVENTS:
        case UPDATE_EVENT:
            console.log("アクションが取得できるか")
            console.log(action.response.data)
            const data = action.response.data
            //dataのidをキーにしたdataを返す
            return { ...events,[data.id]:data}
        
        case READ_EVENTS:
            //console.log(action.response.data);
            //idをkeyに配列を作流、lodashの動作。_はlodashの変数で、上の方で読みこんるよ！
            //console.log(_.mapKeys(action.response.data,'id'))
            return _.mapKeys(action.response.data,'id') 
            //return action.response.data
            //Object { 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}, 7: {…}, 8: {…}, 9: {…} }


        case DELETE_EVENT:
            delete events[action.id]
            //スプレッド演算し、更新後のeventsを返す
            return {...events}
        default:
            return events //何も起きてないオブジェクト
    }

}



