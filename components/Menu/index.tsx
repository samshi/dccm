import MenuItem from './MenuItem'
import {useEffect, useState} from 'react'

const Menu = () => {
  const [itemList, setItemList] = useState(['Home', 'Explore', 'Ranking', 'Minting', 'Resources'])

  return (
    <>
      {itemList.map((item, idx) => {
        return <MenuItem name={item} key={item}/>
      })}
    </>
  )
}
export default Menu
