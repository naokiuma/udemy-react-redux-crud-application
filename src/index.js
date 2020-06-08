import React from "react";
import ReactDOM from 'react-dom';
//storeを利用するためのもの
//redux-thunkを使うためのミドルウェアがapplyMiddleware。
import { createStore,applyMiddleware } from 'redux'
//すべての環境で使うためのもの
import { Provider } from 'react-redux'
//アクションを使えるようにやる
import thunk from 'redux-thunk'
import './index.css';
import reducer from './reducers';
//見通しを良くするために
import EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';

//ここで作られるstoreはアプリ内の唯一のものになる
//applyMiddlewareの引数にthunkを使うことで、storeにアクションを渡せるようにする
const store = createStore(reducer,applyMiddleware(thunk))

//既存のコンポーネントを、providerコンポートネントでwhrapし、store属性に、
//上のstoreを当てはめる。これで、バケツリレーをせずにproviderが使える
//ReactDOM.render(<App />, document.getElementById('root'));を変更

ReactDOM.render(
<Provider store={store}>
    <EventsIndex />
</Provider>,
 document.getElementById('root')
);
registerServiceWorker();
