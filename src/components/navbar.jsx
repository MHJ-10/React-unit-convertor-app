import React , { useEffect, useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { SunFill , MoonFill , List } from "react-bootstrap-icons";
import { units } from '../units';
import {useTranslation} from "react-i18next"
import i18n from "../i18n";


function Navbar() {
   const {t} = useTranslation()
   const[theme,setTheme] = useState("lightTheme")
   const[icon,setIcon] = useState(<MoonFill/>)

   useEffect(() => {
  document.body.className = theme
   },[theme])

  function handleNavbar () {
    document.body.classList.toggle("responsive")
  }

  function handleTheme () {
    theme==="lightTheme"?
    setTheme("darkTheme") & setIcon(<SunFill/>):
    setTheme("lightTheme") & setIcon(<MoonFill/>)
   }

   function handleLanguage (e) {
    i18n.changeLanguage(e.target.value)
    e.target.value==="fa" ? document.body.dir ="rtl" : document.body.dir ="ltr"
   }

  
    return ( 
    <>
        <nav  className='navbar' >
           <Link 
           to={`${units[0].name.toLowerCase()}`} 
           className="navbar-brand ms-3"
           >{t("Unit Convertor")}
           </Link>
               {units.map(unit=>(
                 <ul 
                 key={unit.id} 
                 className="mt-3">
                  <NavLink 
                   to={`/${unit.name.toLowerCase()}`}  
                   className="nav-item text-decoration-none">
                     {t(unit.name)}
                  </NavLink> 
                 </ul>
                ))}
                    <h4 className="icon text-warning "
                      onClick={handleTheme}>
                      <i>{icon}</i>
                    </h4> 

                   <select 
                     className="lang-select rounded ms-2"
                     onChange={handleLanguage}
                     value={i18n.language}>
                     <option value="en">EN</option>
                     <option value="fa">FA</option>
                   </select>

                   <button 
                   onClick={handleNavbar}
                   className="btn-close">
                   </button>

                   <button 
                   onClick={handleNavbar}
                   className="btn btn-list">
                     <List/> 
                    </button>
                    
               </nav> 
     </>
     );
}

export default Navbar;