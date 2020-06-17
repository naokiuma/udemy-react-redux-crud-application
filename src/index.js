import React from "react";
import ReactDOM from 'react-dom';
//storeを利用するためのもの
//redux-thunkを使うためのミドルウェアがapplyMiddleware。
import { createStore,applyMiddleware } from 'redux'
//すべての環境で使うためのもの
import { Provider } from 'react-redux'
//アクションを使えるようにやる
import thunk from 'redux-thunk'
//routerなどの動きをするもの。ルーターについてはこちらがわかりやすい
//https://qiita.com/ShinKano/items/541050c36e08e78a5176
import { BrowserRouter,Route,Switch } from 'react-router-dom'
//devtools開発しやすいように
import { composeWithDevTools } from 'redux-devtools-extension'
//マテリアルuiをインポート
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers';
//見通しを良くするために
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';

import registerServiceWorker from './registerServiceWorker';

//ここで作られるstoreはアプリ内の唯一のものになる
//applyMiddlewareの引数にthunkを使うことで、storeにアクションを渡せるようにする。
//さらにdevelopmentモードの場合、composeWidthDEvToolsを使うように。
const enhancer = process.env.NODE_ENV === 'development' ?
composeWithDevTools(applyMiddleware(thunk)) :applyMiddleware(thunk)
const store = createStore(reducer,enhancer)


//既存のコンポーネントを、providerコンポートネントでwhrapし、store属性に、
//上のstoreを当てはめる。これで、バケツリレーをせずにproviderが使える
//ReactDOM.render(<App />, document.getElementById('root'));を変更
//これはルーター。変数にする場合は「:id」とする。
ReactDOM.render(
<MuiThemeProvider>
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/events/new" component={EventsNew} />
                <Route exact path="/events/:id" component={EventsShow} />         
                <Route exact path="/" component={EventsIndex} />
                <Route exact path="/events" component={EventsIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>
</MuiThemeProvider>,
 document.getElementById('root')
);
registerServiceWorker();
