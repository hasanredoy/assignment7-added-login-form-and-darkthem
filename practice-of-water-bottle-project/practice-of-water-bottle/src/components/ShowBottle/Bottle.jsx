
import PropTypes from 'prop-types';

const Bottle = ({bottle, handleCartBtn,toggle}) => {
  // const { name, price, image, stock } = bottle
  // console.log(bottle);
  return (
    <div className='flex lg:flex-row'>
      <div className={"card  bg-white  shadow-2xl"+(toggle ?' bg-slate-400':'bg-white')}>
        <figure className="px-5 pt-3">
          <img src={bottle.img} />
        </figure>
        <div className="card-body items-center text-center bg-slate-100 rounded-md my-2">
          <h2 className=" text-2xl font-bold text-red-400">{bottle.name}</h2>
          <p>Brand: {bottle.seller}</p>
          <div className="divider divider-primary"></div>
          <div className='flex gap-x-3  bg-red-100 p-3 rounded-lg'>
          <p className=' text-lg font-bold border-r-2 border-gray-500 pr-1'>Price: {bottle.price} $</p>
          <p className=' text-lg font-bold border-l-2 border-gray-500 pl-1'> Stock Left: <span>{bottle.stock}</span></p>
          </div>
          <div className="card-actions">
            <button onClick={function(){handleCartBtn(bottle);}} className="btn btn-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object,
  toggle: PropTypes.object,
  handleCartBtn: PropTypes.func,
  handleRemove: PropTypes.func
};

export default Bottle;