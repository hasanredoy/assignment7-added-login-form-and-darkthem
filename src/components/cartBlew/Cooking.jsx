
import PropTypes from 'prop-types';

const Cooking = ({cooking}) => {
  
  return (
    <div>
      {
        cooking.map((coking ,index) =>{
          return(
            <div key={coking.recipe_id} className=''>
            
            <div className=' flex justify-evenly bg-white rounded-xl px-2 py-4  mb-2 pr-14'>
               {/* <h2 ></h2>
               {index+1}.
                <h2 className='pr-8'>{coking.recipe_name}</h2>
                <h2  className='pr-8'>{coking.preparing_time} minutes</h2>
                <h2 className=' lg:pl-10'>{coking.calories} cal</h2> */}
                <tr>
                   <td>
                   {index+1}.
                  </td>
                </tr>
                <tr className='border-r border-gray-500 pr-1'>
                   <td>
                   {coking.recipe_name}
                  </td>
                </tr>
                <tr className='border-r border-gray-500 pr-2'>
                   <td>
                   {coking.preparing_time} minutes
                  </td>
                </tr>
                <tr className='pl-6'>
                   <td>
                   {coking.calories} calories
                  </td>
                </tr>
               
              </div>
              </div>
          )
        })
            
      }
    </div>
  );
};

Cooking.propTypes = {
  cooking:PropTypes.array
};

export default Cooking;