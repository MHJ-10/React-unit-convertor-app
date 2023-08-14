import React from 'react';
import {useTranslation} from "react-i18next"

function Select ({label , items , onChange}) {
  const{t}=useTranslation()
    return(
      <div className='form-floating px-2 '>
            <select 
            className='form-select my-3 '
            onChange={onChange}>
             {items.map((option) => (
                <option value={option.factor} key={option.id}>
                    {t(option.name)}
                </option>
             ))}
            </select>
            <label>{label}</label>
 
      </div>   
    )
 
}

export default Select;