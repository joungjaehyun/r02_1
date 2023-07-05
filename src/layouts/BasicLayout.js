
import SampleNav from "./nav/SampleNav";
const logo = 'logo.jpg'
const BasicLayout = ({children}) => {
  return ( 
    <div className="container mx-auto min-w-[1280px] flex bg-sky-300">
      <div>
      <img className="object-contain h-[17vh]" src={require(`../image/${logo}`)}></img>
      </div>
      <div className=" bg-gray-500">
        <SampleNav></SampleNav>
      </div>
      <div className="text-2xl p-4 flex">
 
        <div className="m-3 p-3">Login</div>
        <div className="m-3 p-3 flex">
        <div className="text-xl">SNS Login</div>
        <img className="m-2 p-1 h-[5vh]" src={require("../image/Kakao_logo.jpg")}></img>
        <img className="m-2 p-1 h-[5vh]" src={require("../image/naver.png")}></img>
        <img className="m-2 p-1 h-[5vh]" src={require("../image/google.png")}></img>
        </div> 
      </div>
      <div className="text-2xl m-2 p-4 flex">
        Event
      </div>
      <div className="text-2xl m-2 p-4 flex">
        Sale
      </div>
      
    </div>
  );
}
 
export default BasicLayout;