import React, { useState, useEffect } from 'react';

function App() {
  const [ length, setLength ] = useState(8)
  const [ isNumber, setIsNumber ] = useState(false)
  const [ isCharacter, setIsCharacter ] = useState(false)
  const [ password, setPassword ] = useState("")

  const passwordGenerator = () => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumber) str += "0123456789"
    if(isCharacter) str += "~!@#$%^&*()_-"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }

  useEffect(() => {
    passwordGenerator()

  }, [length, isCharacter, isNumber, setPassword])

  

  return(
    <div className='flex flex-col justify-center p-40 gap-4'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='font-bold text-5xl'>Random Password Generator</h1>
        <p className='hidden sm:inline'>Create strong and secure passwords to keep your account safe online</p>
      </div>

      <div className='shadow-lg hover:xl h-96 flex flex-col justify-center'>

        <input
          className='w-2/5 h-12 border rounded-3xl px-4 mx-40 shadow-md'
          type="text"
          value={password}
          placeholder="Password"
          readOnly
        />
      
      

        <input
          className=''
          type = "range"
          min={6}
          max={50}
          value = {length}
          onChange={(e) => {setLength(e.target.value)}}>
        </input>
        <label>Length: {length}</label>

        <br></br>

        <input
          type = "checkbox"
          value = {isNumber}
          onChange={() => {setIsNumber(!isNumber)}}>
        </input>
        <label>Number</label>

        <br></br>

        <input
          type = "checkbox"
          value = {isCharacter}
          onChange={() => {setIsCharacter(!isCharacter)}}>
        </input>
        <label>Character</label>
      </div>
    </ div>
  )


};


export default App
