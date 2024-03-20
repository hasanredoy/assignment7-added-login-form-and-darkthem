import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Bottle from '../ShowBottle/Bottle';
import { getStorage } from '../js/LocalStorage';

Bottles.propTypes = {
  bottle:PropTypes.object,
  toggle:PropTypes.object,
  bottles:PropTypes.func,
  handleCartBtn:PropTypes.func,
  handleRemove:PropTypes.func,
  // handleCart:PropTypes.func,
};

function Bottles({handleCartBtn, handleRemove,toggle}) {
  const[bottles, setBottles]=useState([])
  const[newCart, setNewCart]=useState([])

// console.log(bottle);
  useEffect(()=>{
    fetch('bottle.json')
    .then(res=> res.json())
    .then(data => setBottles(data))
  },[])
  useEffect(()=>{
    if(bottles.length>=1){
      const getStorageFunc =getStorage()
      let saveIDs = []
      for(const lp of getStorageFunc){
        const newBottle = bottles.find(singleB => singleB.id === lp)
        if(newBottle){
          saveIDs.push(newBottle)
        }
      }
      setNewCart(saveIDs)
    }
  },[bottles])
  console.log(newCart);
  // handleCart(newCart)
  return (
    <div  className=' grid grid-cols-1 lg:grid-cols-2 w-[70%] gap-4'>
      {
        bottles.map(bottle => <Bottle key={bottle.id} 
          handleCartBtn={handleCartBtn}
          handleRemove={handleRemove}
          newCart={newCart}
          bottle={bottle}
          toggle={toggle}
          ></Bottle>)
      }
    </div>
  );
}

export default Bottles;