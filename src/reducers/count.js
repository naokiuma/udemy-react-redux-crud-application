import { INCREMENT,DECREMENT } from '../actions'

//状態をオブジェクトの初期値を定義。
//初期状態のオブジェクトを入れる変数名はinitialState

const initialState = { value:0 }//初期のカウント

//関数として定義。引数はstate、acitonとして２つもつ
export default(state =initialState, action) => {
    //actionのtype（INCREMENTかDECREMENTか）はaction.typeで拾える
    switch(action.type){
        case INCREMENT:
            return { value:state.value + 1}
        case DECREMENT:
            return { value:state.value - 1}
        default:
            return state
    }

}