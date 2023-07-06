
import BodyLayout from "./BodyLayout";
import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
  return ( 
    <div className="m-auto m-5 p-5" >
      <div><SampleNav></SampleNav></div>
      <br></br>
      <div><BodyLayout></BodyLayout></div>
      
    </div>
  );
}
 
export default BasicLayout;