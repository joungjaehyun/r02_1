import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";


const CountButtons = () => {

    const dispatch = useDispatch()

    const handleClickInc = () => {
        
        dispatch(inc())
    }

    const handleClickDec = () => {

        dispatch(dec())
    }

    return ( 
        <div >
            <button className="m-2" onClick={handleClickInc}> INC </button>
            <button className="m-2" onClick={handleClickDec}> DEC </button>

        </div>
     );
}
 
export default CountButtons;