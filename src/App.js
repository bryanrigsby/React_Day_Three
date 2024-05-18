import React, {useState, useEffect} from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import { fakeMenuItems, fakeMerchItems } from './fakeData';

function App() {

  const [menuItems, setMenuItems] = useState(fakeMenuItems)
  const [merchItems, setMerchItems] = useState(fakeMerchItems)
  
  return (
   <div className='container'>
    <div className="row">
      <div className="col-12">
        <h1 className={"my-3 text-cnet"}>Coffee Shop Menu</h1>
      </div>
    </div>
    <div className="row my-5">
      <div className="h3">Coffee</div>
      {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} item={menuItem.item} price={menuItem.price} image={menuItem.image} altText={menuItem.item} />
      ))}
    </div>

    <div className="row">
      <div className="h3">Merchandise</div>
      {merchItems && merchItems.length > 0 && merchItems.map((merchItem) => (
          <MenuItem key={merchItem.id} item={merchItem.item} price={merchItem.price} image={merchItem.image} altText={merchItem.item} />
      ))}
    </div>
   </div>
  );
}

export default App;
