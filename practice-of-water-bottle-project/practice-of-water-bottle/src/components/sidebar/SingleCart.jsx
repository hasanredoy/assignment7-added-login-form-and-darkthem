import { BsCartX } from "react-icons/bs";
import PropTypes from 'prop-types';

const SingleCart = ({ cart ,handleRemove, index}) => {
  // console.log(cart);
  return (
    <div className='flex justify-between  py-2'>
      <div className="divider"></div>
      <p>{index+1}.</p>
      <h2 className=' text-xl font-semibold'>{cart.name.slice(6,18)}</h2>
      <p><span className=' text-red-400 text-xl'>{cart.price}</span> $</p>
      <button onClick={()=>handleRemove(cart.id)} className='btn btn-default'> <BsCartX /></button>
      
    </div>
  );
};

SingleCart.propTypes = {
  cart: PropTypes.object,
  index: PropTypes.object,
  handleRemove: PropTypes.func,

};

export default SingleCart;