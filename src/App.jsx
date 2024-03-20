
import { useEffect, useState } from 'react';
import './App.css'
import MainFunc from './components/main-part/MainFunc';
import Sidebar from './components/sidebar/Sidebar'
// import { FaRegUserCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/show-singup/Main';


function App() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(result => setCards(result))

  }
    , [])

  const [change, setChange] = useState(false)
  const handleSingUp = () => {
    setChange(!change)
  }

  const [sidebar, setSidebar] = useState([])
  let [cooking, setCooking] = useState([])
  const handleAdd = (card) => {
    console.log(card);
    const newCard = sidebar.find(sidebarX => sidebarX.recipe_id == card.recipe_id)
    if (!newCard) {
      const setNewSidebar = [...sidebar, card]
      setSidebar(setNewSidebar)
    }
    else toast("Already Exist")
  }

  const handleRemove = (card) => {
    console.log(card);
    const newCards = sidebar.filter(sideX => sideX.recipe_id !== card.recipe_id)
    setSidebar(newCards)
    const setNewCooking = [...cooking, card]
    setCooking(setNewCooking)
  }

  const [toggle , setToggle]= useState(false)
   const handleToggle=()=>{
    setToggle(!toggle)
   }

  if(toggle){
    document.getElementById('body').classList.add('bg-black')
  }
  else{
    document.getElementById('body').classList.remove('bg-black')

  }
  return (
    <div className='relative'>
      {!change && (
         <section>
                  
      <header className=' z-40 sticky top-0 left-0'>
      <div className="  navbar rounded-2xl bg-slate-300 container  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Recipe</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>

            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold space-x-0 ">
            Chef Kitchen</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Recipe</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={handleToggle} className=' my-4 w-12 h-8 rounded-full bg-slate-400 '><div className={'z-50 w-4 h-4 bg-white rounded-full'+(toggle?' ml-6 ' : 'ml-3 rounded-full')}></div></button>
          <a 
          onClick={handleSingUp}
          className="btn text-xl rounded-full bg-green-500">SingUp</a>
        </div>
      </div>
    </header>
    
    <section className=' w-[90%] lg:container mx-auto my-5'>
      <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: 'url(https://i.postimg.cc/ncXKvtTP/pexels-prince-photos-3054690.jpg)' }}>
        <div className="hero-overlay bg-black bg-opacity-80 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold ">Discover an exceptional cooking
              <br />
              class tailored for you!</h1>
            <p className="mb-5 mx-auto max-w-sm lg:w-full">Assalamualaikum Everyone welcome to our kitchen.
              <br />
              in this page you will learn how to cook some of our best deserts .
            </p>
            <div className='flex flex-col lg:flex-row justify-center gap-3'>
              <button className=" mx-auto lg:mx-0 text-center justify-center w-36 btn border-none bg-[#0BE58A]">Explore more </button>
              <button className=" mx-auto lg:mx-0 text-center justify-center w-36 btn btn-ghost border border-white">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className=' my-10'>
      <h1 className="mb-5 text-center text-2xl lg:text-5xl font-bold ">Our Recipes</h1>
      <p className="mb-5 mx-auto max-w-sm lg:w-full text-center">Assalamualaikum Everyone welcome to our kitchen.
        <br />
        all of our best deserts are given blew do not waste {"you're"} time check out our Recipe.
      </p>
    </section>
   
    <div className=' flex flex-col lg:flex-row gap-x-3 container mx-auto'>
      <MainFunc cards={cards} handleAdd={handleAdd}></MainFunc>
      <Sidebar cooking={cooking} sidebar={sidebar}  handleRemove={handleRemove}></Sidebar>
    </div>
    
    <footer>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-16">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Cooking Tutorials</a>
          <a className="link link-hover">Feedback</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved || by Hossain Hasan Redoy </p>
        </aside>
      </footer>
    </footer>
         </section>
        )
      }
      {
        change&&(
          <Main handleSingUp={handleSingUp}></Main>
        )
      }
      <ToastContainer ></ToastContainer>
    </div>
  )
}

export default App
