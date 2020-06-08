//すべてのreducsersをここでまとめてしまうcombineReducers
import { combineReducers } from 'redux'
//count.jsから取得
import events from './events'

//storeで使うので、エクスポート。今回はcount一つだが
export default combineReducers({ events })
//いろいろな状態を管理したい場合は
//export default combineReducers({ foo,bar,baz }) みたいな感じ

