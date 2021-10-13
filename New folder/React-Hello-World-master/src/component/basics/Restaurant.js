import React, {useState} from 'react'
import "./style.css"
import Menu from "./menuapi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curElem) =>{

  return curElem.category;

})),
"All",];

console.log(uniqueList);

const Restaurant = () => {

   const [menuData, setmenuData] = useState(Menu);
   const [menuList,setMenuList] = useState(uniqueList);

   const filterItem = (category) => {

      if(category === "All"){
        setmenuData(Menu);
        return;
      }

     const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
     });

     setmenuData(updatedList);
   };

    return (
        <>
            <Navbar filterItem = {filterItem} menuList = {menuList} />
            < MenuCard menuData = {menuData} />
        </>
    )
}

export default Restaurant
