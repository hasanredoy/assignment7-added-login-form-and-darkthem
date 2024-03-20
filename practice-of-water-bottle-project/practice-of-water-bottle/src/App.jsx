
import { useState } from 'react'
import './App.css'
import Bottles from './components/FetchBottle/Bottles'
import Cart from './components/sidebar/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLS} from './components/js/LocalStorage';



const getBody = document.getElementById('body')
const getNav = document.getElementById('nav')
function App() {
const [toggle , setToggle ]= useState(false)
const handleToggle = ()=>{
  setToggle(!toggle)
  if(!toggle){
  getBody.classList.add('bg-slate-800')
  getNav.classList.add('bg-gray-200')
  getNav.classList.remove('bg-slate-400')
}
else{
  getBody.classList.remove('bg-slate-800')
  getNav.classList.remove('bg-gray-200')
  getNav.classList.add('bg-slate-400')
}
  console.log(getBody);
}
  
   const [cart , setCart]=useState([])
  //  const handleCart = (id)=>{
  //    console.log(id);
  //    setCart(id)
  //  }
  const handleRemove = (cartt)=>{
    console.log(cartt)
    const newCart = cart.filter(cartX => cartX.id !== cartt);
    // const cartt = [...cart, newCart]
    setCart(newCart)
  }
   // add to cart btn 
  const handleCartBtn =(bottle)=>{
    // console.log(nCart);
    const setCartt = cart.find(cartX => cartX.id == bottle.id)
    const newCart = [...cart , bottle] 
    if(cart.length === 4)return
     if(!setCartt){
      toast.success("Product Added")
       setCart(newCart)
       const bottleId = bottle.id
       addToLS(bottleId)
     }
     else toast.error("Product Already Added")
  }

  return (
    <div className='  p-5 rounded-lg'>
      <div>
      <h2 className=' text-5xl  my-5 font-bold text-cyan-900 '>Memorable Water Bottle</h2>
      <button onClick={handleToggle} className=' my-4 w-12 h-8 rounded-full bg-slate-400 '><div className={'z-50 w-4 h-4 bg-slate-800 rounded-full'+(toggle?' ml-6' : 'ml-3 rounded-full')}></div></button>
      </div>
      <div className='md:flex gap-x-5'>
        <Bottles 
        handleCartBtn={handleCartBtn}
        toggle={toggle}
        ></Bottles>
        <Cart cart={cart}
        handleRemove={handleRemove}></Cart>
        
      </div>
      <ToastContainer></ToastContainer>

      
    </div>
  )
}

export default App
