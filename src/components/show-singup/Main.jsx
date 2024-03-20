import Registration from "./Regestration";


const Main = ({handleSingUp}) => {
  return (
    <div className=" h-screen   flex justify-center  align-middle items-center z-50 content-center bg-purple-400">
    {/* <RegistrationForm></RegistrationForm> */}
    <Registration handleSingUp={handleSingUp}></Registration>
    </div>
  );
};

export default Main;