import React from "react";
import ReactDOM from 'react-dom';
//storeを利用するためのもの
import { createStore } from 'redux'
//すべての環境で使うためのもの
import { Provider } from 'react-redux'
import './index.css';
import reducer from './reducers';
//見通しを良くするために
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//ここで作られるstoreはアプリ内の唯一のものになる
const store = createStore(reducer)

//既存のコンポーネントを、providerコンポートネントでwhrapし、store属性に、
//上のstoreを当てはめる。これで、バケツリレーをせずにproviderが使える
//ReactDOM.render(<App />, document.getElementById('root'));を変更

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root')
);
registerServiceWorker();
