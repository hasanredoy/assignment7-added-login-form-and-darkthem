import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";

const MainFunc = ({ cards ,handleAdd}) => {
  
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto w-[95%] lg:w-[65%] '>
      {
        cards.map(card => {
           return (
            <div key={card.recipe_id} className="card  bg-base-200 shadow-xl p-4 border border-gray-400">
              <figure><img className=' rounded-2xl h-[252px] w-full' src={card.recipe_image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="text-2xl font-bold">{card.recipe_name}</h2>
                <p>{card.short_description}</p>
                <div className="divider"></div>
                <div className=''>
                <h2 className=" text-2xl font-bold">Ingredients: 6</h2>
                <ul className=' list-disc pl-6 text-lg'>
                  <li>{card.ingredients[0]}</li>
                  <li>{card.ingredients[1]}</li>
                  <li>{card.ingredients[2]}</li>
                  <li>{card.ingredients[3]}</li>
                  <li>{card.ingredients[4]}</li>
                  <li>{card.ingredients[5]}</li>
                </ul>
                </div>
                <div className=" divider"></div>
                <div className='flex justify-between'>
                  <h3 className='flex text-lg gap-2'><span className=' mt-1'><IoMdTime /></span>{card.preparing_time} minutes </h3>
                  <h3 className='flex text-lg gap-2'><span className=' mt-1'><RiFireLine /></span>{card.calories} calories </h3>
                </div>
                <div className="card-actions justify-start">
                  <button className=" rounded-full btn bg-[#0BE58A]" onClick={()=>handleAdd(card)}>Want To Cook</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

MainFunc.propTypes = {
  cards: PropTypes.array,
  handleAdd: PropTypes.func,
};

export default MainFunc;