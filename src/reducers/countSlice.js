import { createSlice } from "@reduxjs/toolkit";

// store와 reducer를 연결 역활 = createSlice
const countSlice = createSlice({

    name: "CountSlice",
    initialState: {num: 5},

    //  reducesrs 동기화처리 extraReducers는 비동기화처리
    reducers: {
        inc: (state) => {
            console.log(state)

            return {num: state.num + 1}
            
        },
        dec: (state) => {
            console.log(state)
            
            return {num: state.num - 1}
        }
    }
})
//  reducers 내부에 들어 가있으면 actions 내부
export const {inc, dec} = countSlice.actions
// 실제로 노출되는 부분
export default countSlice.reducer