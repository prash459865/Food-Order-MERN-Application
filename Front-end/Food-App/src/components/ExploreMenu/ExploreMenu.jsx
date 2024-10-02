import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='Exploremenu' id='ExploreMenu'>
      <h1>Explore our menu</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam necessitatibus perferendis perspiciatis porro facilis eius, ea quae expedita placeat sunt, officia in saepe amet tempora rem assumenda molestiae illo! Nobis!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            
            return(
                <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                           <img className={category===item.menu_name?"active":""} src= {item.menu_image} alt="" />
                           <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
