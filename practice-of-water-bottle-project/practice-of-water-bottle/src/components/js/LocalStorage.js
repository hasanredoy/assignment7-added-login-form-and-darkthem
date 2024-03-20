const getStorage =()=>{
  const include = localStorage.getItem('cart')
  if(include){
   return JSON.parse(include)
  }
  else{
   return []
  }
}

const saveInLS = (id)=>{

const stringify = JSON.stringify(id)
localStorage.setItem('cart', stringify)
}

const addToLS = id =>{
 const getItem = getStorage();
const newId = [...getItem, id]
 saveInLS(newId)
}

export { addToLS, getStorage, saveInLS }