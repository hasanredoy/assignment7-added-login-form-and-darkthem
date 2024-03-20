
import PropTypes from 'prop-types';
import SingleCart from './SingleCart';
// import { useState } from 'react';

const Cart = ({cart ,handleRemove}) => {
  // let [cartPrice , setCartPrice] = useState(0)
  // const newPrice = cartPrice=cartPrice+cart.price  
  // setCartPrice(newPrice)

  let price = cart.map(a => a.price)
  // console.log(price);
  return (
    <div className=' w-[30%] h-full p-2 rounded-md bg-white'>
      <h1 className='text-2xl text-center font-bold'> Cart</h1>
      <div className="divider divide-cyan-300"></div>
      <div className='flex justify-between border-b-2 border-gray-400 pb-1'>
        <h2 className=' text-xl font-bold'>Product Name</h2>
        <h2 className=' text-xl font-bold'>Price</h2>
         <h1 className=' text-xl font-bold'>Remove</h1>
      </div>
      <div className=''>
        {
          cart.map((sCart ,index) => <SingleCart handleRemove={handleRemove} key={index} cart={sCart} index={index}></SingleCart>)
        }
      
      </div>
      <div className="divider"></div>
      <div className='flex justify-between'>
        <h2 className=' text-xl font-bold'>Total Price</h2>
        {/* <p><span className=' text-red-400 text-xl'>{cart.price}</span> $</p> */}
        <p><span className=' text-red-400 text-xl'>{
         price.reduce((a,b)=>a+b,0)}
        </span> $</p>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart:PropTypes.array,
  handleRemove:PropTypes.func,
};

export default Cart;