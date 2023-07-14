import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import useCustomLogin from "../hooks/useCustomLogin";
import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

    const {loginInfo} = useCustomLogin()
   
    

    return ( 
        <div  className="bg-backImg bg-cover bg-no-repeat">
        <BasicLayout></BasicLayout>
        <div className="text-white text-center text-3xl font-bold ">
        
          <p>It is combined by React.js and Spring Boot program.</p>
          <p>Back-End Side is used to Spring boot and JPA with MySQL.</p>
          <p>Front-End Side is used to React.</p>
          <p>Especially, React is used Router library for making React as web program. </p>
          <p>It is made During 2 months</p>
          <CountDisplay></CountDisplay>
          <CountButtons></CountButtons>

          <TodoInput></TodoInput>

          <div className="flex justify-center items-center">
          <img  src={require('../image/backimage.jpg')} ></img>
          </div>
         </div>
      </div>
     );
}
 
export default AboutPage;