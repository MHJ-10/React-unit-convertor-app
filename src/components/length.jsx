import React,{useState } from 'react';
import Input from '../Input';
import Select from '../Select';
import { length } from '../units';
import {useTranslation} from "react-i18next"

  function Length () {
    const{t} = useTranslation()
    const [result,setResult] = useState(0)
    const [amount,setAmount] = useState(0)
    const [from,setFrom] = useState(1)
    const [to,setTo] = useState(1)

    

 
    return(
     <div className='form-group rounded rounded-3 w-50 mx-auto my-5 '>
       <div>
         <h3 
          className='title text-center mb-3 p-2'>
           {t("Length Convertor")}
         </h3>
       </div>
       <div className='col '>
        <Input
        label={t("Amount")}
        onChange={e=>setAmount(e.target.value)} />
       </div>
     
       <div className='row'>

        <div className='col'>
          <Select 
          label={t("From")}
          items={length}
          onChange={e=>setFrom(e.target.value)} />
        </div>

        <div className='col'>
          <Select
           label={t("To")}
           items={length}
           onChange={e=>setTo(e.target.value)} />
        </div>
         </div>

         <div className='row'>
             <div className=' col text-center my-3'>
             <button 
             className='btn btn-primary'
             onClick={()=>setResult((amount*from)/to)}>{t("Convert")}</button>
             </div>

             <div className='col text-center my-2 text-danger'>
            <h4>{t("Result")}</h4> 
            <h4>{result}</h4> 
             </div>
         </div>
        
     </div>
    )
}
export default Length;