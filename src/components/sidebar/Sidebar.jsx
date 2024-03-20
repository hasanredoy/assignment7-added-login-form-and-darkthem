
import PropTypes from 'prop-types';
import Cooking from '../cartBlew/Cooking';

const Sidebar = ({ sidebar, handleRemove, cooking }) => {
  console.log(cooking);
  let time = cooking.map(a=>a.preparing_time)
  let calories = cooking.map(a=>a.calories)
  return (
    <div className=' w-[90%] mt-10 lg:mt-0 mx-auto lg:w-[40%] bg-gray-100 rounded-xl border border-gray-600 h-full'>
      <h1 className=' text-center pt-2 lg:pt-5 font-bold text-2xl lg:text-4xl'>Want To Cook: <span>{sidebar.length}</span></h1>
      <div className="divider"></div>
      <div className=' pr-[90px] flex justify-evenly'>
        <h3>Name </h3>
        <h3>Time </h3>
        <h3>Calories </h3>
      </div>
      {
        sidebar.map((side, index) => {
          
          return (
            <div key={index} className=' flex justify-between bg-white rounded-xl px-2 py-4  mb-2'>
              <div className='flex justify-evenly gap-x-7 pl-0 mt-2 '>
                {/* <h2 >{index + 1}</h2>
                <h2>{side.recipe_name}</h2>
                <h2>{side.preparing_time} minutes</h2>
                <h2 className=' lg:pl-12'>{side.calories} Calories</h2> */}
                 <tr>
                   <td>
                   {index+1}.
                  </td>
                </tr>
                <tr className='border-r border-gray-500 pr-1'>
                   <td>
                   {side.recipe_name}
                  </td>
                </tr>
                <tr className='border-r border-gray-500 pr-2'>
                   <td>
                   {side.preparing_time} minutes
                  </td>
                </tr>
                <tr className='pl-6'>
                   <td>
                   {side.calories} calories
                  </td>
                </tr>
              </div>
              <button onClick={() => handleRemove(side)} className='btn bg-[#0BE58A] rounded-full ml-2'>Preparing</button>
            </div>
          )
        })
      }
      <div className="divider"></div>
      <h1 className=' text-center pt-8 lg:pt-10 font-bold text-2xl lg:text-4xl'>Currently Cooking: <span>{cooking.length}</span></h1>
      <div className="divider"></div>
      <div className=' flex justify-evenly'>
        <h3>Name </h3>
        <h3>Time </h3>
        <h3>Calories </h3>
      </div>
      <div>
        {
          <Cooking cooking={cooking}></Cooking>
        }
      </div>
      <div className="divider"></div>
      <div className=' flex justify-evenly'>
      <h3>Total Time= {time.reduce((a,b)=>a+b,0)} minutes</h3>
        <h3>Total Calories= {calories.reduce((a,b)=>a+b,0)} calories</h3>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: PropTypes.array,
  cooking: PropTypes.array,
  handleRemove: PropTypes.func.isRequired,
};

export default Sidebar;