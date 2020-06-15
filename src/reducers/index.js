//すべてのreducsersをここでまとめてしまうcombineReducers
import { combineReducers } from 'redux'
import {reducer as form } from 'redux-form'
//count.jsから取得
import events from './events'

//storeで使うので、エクスポート。reducer as formを受け取ってる。
export default combineReducers({ events,form })
//いろいろな状態を管理したい場合は
//export default combineReducers({ foo,bar,baz }) みたいな感じ

