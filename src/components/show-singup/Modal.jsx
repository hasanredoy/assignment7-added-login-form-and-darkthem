
const Modal = ({name, email, handleChange, handleSingUp}) => {
  return (
    <div className=" space-y-5">
    <h1 className=" text-xl text-center font-bold text-red-400">{"You're Submission Was Successful!!"}</h1>
    <h1 className=" text-base text-center font-bold">{`You're Name:  ${name}`}</h1>
    <h1 className=" text-base text-center font-bold">{`You're Email:  ${email}`}</h1>
   <button onClick={()=>handleSingUp()} className="btn btn-secondary flex justify-center mx-auto ">Go to Home</button>

 </div>
  );
};

export default Modal;