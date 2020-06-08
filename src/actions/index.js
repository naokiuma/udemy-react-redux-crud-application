import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//actionの代わりに関数を返せるようになる。さらに、関数の中でdispatchができる
export const readEvents = () => async dispatch => {
        const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
        //console.log("始めるよう");
        //console.log(response)
        dispatch({type: READ_EVENTS,response})
}
