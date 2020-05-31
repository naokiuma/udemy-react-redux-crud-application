//あとでレデューサーでも使うので、constしておく。
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


//それぞれアクションクリエイター
const increment = () => {
    return{
        //アクション
        type:INCREMENT
    }
}

const decrement = () => ({
    //こんな感じでリターンを外すこともできる
        type:DECREMENT
})
