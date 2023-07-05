
import BodyLayout from "./BodyLayout";
import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
  return ( 
    <div className="bg-sky-300" >
      <div><SampleNav></SampleNav></div>
      
      <div><BodyLayout></BodyLayout></div>
      
    </div>
  );
}
 
export default BasicLayout;