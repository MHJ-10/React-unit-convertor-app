import React,{useState} from 'react';

function Input ({label , onChange}) {
   const[number,setNumber] = useState("")

  function handleNumber (e) {
   const number = e.target.validity.valid ? e.target.value : number 
   setNumber(number)
   }
    return(
     <div className='form-floating p-2 my-2'>
      <input 
      placeholder={label}
      dir="ltr" 
      className='form-control' 
      type="text"
      pattern='[0-9-.]*'
      onInput={handleNumber.bind(this)}
      value={number}
      onChange={onChange} />
      <label 
      dir='ltr' 
      className='mt-2'
      >{label}
      </label>
     </div>   
    )
   
}

export default Input;