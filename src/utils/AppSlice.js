import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    'name' : 'app',
    'initialState' : {'isSideBarShowed' : true},
    'reducers' : {
        'toggleSideBar' : (state )=> {
            state.isSideBarShowed = !state.isSideBarShowed;
        }
    }
})


export const {toggleSideBar} = slice.actions;
export default slice.reducer;