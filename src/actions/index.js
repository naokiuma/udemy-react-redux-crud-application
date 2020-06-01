//あとでレデューサーでも使うので、constしておく。
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


//それぞれアクションクリエイター
export const increment = () => ({
        //アクション
        type:INCREMENT
})

export const decrement = () => ({
    //こんな感じでリターンを外すこともできる
        type:DECREMENT
})


