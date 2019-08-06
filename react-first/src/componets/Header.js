import React from 'react';
import './css/Header.css'
class Header extends React.Component {
    render(){
        const dataArray = ['item1','item2','item3','item4']
        return(
        <nav className='navigation'>
            <h2>HEADER</h2>
            <ul className='navigation-ul'>
               {dataArray.map(item =>{
                   return (
                       <li>
                           {item}
                       </li>
                   )
               })}
               </ul>
        </nav>)
    }
}
export default Header