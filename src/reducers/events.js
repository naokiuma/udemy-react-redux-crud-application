import _ from 'lodash'
import { READ_EVENTS } from '../actions'

//状態をオブジェクトの初期値を定義。
//初期状態のオブジェクトを入れる変数名はinitialState

//const initialState = { value:0 }//初期のカウント
//カウントアプリをやめるのでさくじょ

//関数として定義。引数はstate、acitonとして２つもつ
export default(events = {}, action) => {
    //actionのtype（INCREMENTかDECREMENTか）はaction.typeで拾える
    switch(action.type){
        case READ_EVENTS:
            //console.log(action.response.data);
            //idをkeyに配列を作流、lodashの動作。_はlodashの変数で、上の方で読みこんるよ！
            //console.log(_.mapKeys(action.response.data,'id'))
            return _.mapKeys(action.response.data,'id') 
            //return action.response.data
            //
            //Object { 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}, 7: {…}, 8: {…}, 9: {…} }
        default:
            return events //何もないオブジェクト
    }

}