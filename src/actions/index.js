import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'


const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//actionの代わりに関数を返せるようになる。さらに、関数の中でdispatchができる
export const readEvents = () => async dispatch => {
        const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
        //console.log("始めるよう");
        //console.log(response)
        dispatch({type: READ_EVENTS,response})
}
//getはpostに。valueを渡す
export const postEvent = values => async dispatch => {
        const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
        dispatch({type: CREATE_EVENTS,response})
}

export const putEvent = values => async dispatch => {
        const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`,values)
        dispatch({ type: UPDATE_EVENT,response})
}

//直にページ一覧にアクセスした時のid取得アクション
export const getEvent = id => async dispatch => {
        const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
        //console.log(response)
        dispatch({ type: READ_EVENT,response})
}

//deleteventde出力される値はid（９
export const deleteEvent = id => async dispatch => {
        await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
        dispatch({type: DELETE_EVENT,id})
}
