import React, { Component } from 'react';


//propsは関数に渡せる値。関数側で引数にする。
const App =() =>{
  const profiles = [
    {name:"taro",age:10},
    {name:"hanako",age:5},
    {name:"tomo"}//年齢がない場合はデフォルトpropsが使える
  ]
  return(
  <div>
    {
    profiles.map((profile, index)=>{
      return <User name={profile.name} age={profile.age} key={index}/>
    })
    //にゃー!i am taro　私は10さいです
    //にゃー!i am hanako　私は5さいです
    //にゃー!i am tomo　私は1さいです

    }
  </div>
  )
}

//関数コンポーネント。使いまわせる。
const User = (props) =>{
return <div>にゃー!i am {props.name}　私は{props.age}さいです</div>
}

//デフォルトprops、値が不定だった場合に利用できる
User.defaultProps = {
  age:1
}


export default App;
