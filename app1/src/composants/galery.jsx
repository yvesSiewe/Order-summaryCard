import { useState } from 'react'
export default function Galery(){
    const person ={
      name: "Jane Doe",
      theme:{
        backgroundColor: "black",
        color: "black"
      }
    }
    return(
        <>
            <h1>Profile {person.name}</h1>
            <div>
                <Profile />
            </div>
        </>
    )
}

function Profile(){
  return(
    <img 
      src="https://i.imgur.com/MK3eW3Am.jpg" 
      alt="" 
    />
  )
}