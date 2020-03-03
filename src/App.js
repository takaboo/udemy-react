import React, {Component} from 'react';

const App = () => {
  const profiles = [
    {
      name: "taro",
      age: 10
    },
    {
      name: "Hanako"
    },
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.defaultProps = {
  age: 1
}

export default App;