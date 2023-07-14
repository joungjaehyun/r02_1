import countSlice from "../reducers/countSlice";

const { configureStore } = require("@reduxjs/toolkit");


// configureStore는 함수 그 결과물이 store
export default configureStore({
    reducer : { 
        // 이름 및 값 주기 
        counter: countSlice
    }

})