import { useEffect, useState } from "react";
import { getProduct } from "../../api/productAPI";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}



const ReadComponent = ({ pno, moveModify, moveList }) => {

    const {email} = useSelector(state => state.login)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        }).catch(e =>{
            console.log(e)
            moveList()
        })


    }, [pno])

    return (
        <div>
            <div className="m-2 p-2 text-white font-bold font-serif">
                <div className="m-2 p-2 text-3xl">
                    <span>  Prodcut:  {product.pname}</span>
                </div>
                <div className="m-2 p-2 text-3xl">
                    <span>Description: {product.pdesc} </span>
                </div>
                <div className="m-2 p-2 text-3xl">
                    <span> Price:   {product.price} </span>
                </div>
                <div className="m-2 p-2 ">
                    <ul className="list-none ">
                        {product.images.map((fname, idx) =>
                            <li key={idx}
                            className=" w-[50vh]"
                            >
                                <img 
                                src={`http://localhost/${fname}`} alt="No image"></img>
                            </li>)}
                    </ul>
                </div>
                <div>
                    <button
                        className="bg-sky-400 border-2 m-2 p-2 text-white font-bold"
                        onClick={moveList}
                    >List</button>
                    <button
                        className="bg-amber-400 border-2 m-2 p-2 text-white font-bold"
                        onClick={() => moveModify(product.pno)}
                    >Modify</button>
                    <button
                        className="bg-red-400 border-2 m-2 p-2 text-white font-bold"
                        onClick={() => {
                            dispatch(addCartThunk({email,pno}))
                        }}
                    >Add Cart</button>


                </div>
            </div>

        </div>
    );
}

export default ReadComponent;