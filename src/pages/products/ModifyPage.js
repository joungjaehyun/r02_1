import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../components/products/ModifyComponent";
import useCustomLogin from "../../hooks/useCustomLogin";



const ModifyPage = () => {

    useCustomLogin( (nav)=> {
            nav('/products/list')
    })
    const {queryObj,moveList,moveModify,moveRead} = useQueryObj()
    const {pno} = useParams()
    
    
    return (  
        <div className=" font-serif">
            <div>Product Modify Page {pno}</div>
            <ModifyComponent pno={pno} moveList={moveList} moveRead={moveRead}></ModifyComponent>
        </div>
    );
}
 
export default ModifyPage;