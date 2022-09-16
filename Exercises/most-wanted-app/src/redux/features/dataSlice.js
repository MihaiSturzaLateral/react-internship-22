import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    dataList:[],
    status:null
}

export const getData=createAsyncThunk(//2 argumente - nume (ce actiune se realiz), al 2-lea argument e async function 
    'data/getData',
    async ()=>{
        const rsp= await axios.get('https://ws-public.interpol.int/notices/v1/red')
    return rsp.data;
    }
)

const dataSlice=createSlice({
    name: 'data',
    initialState,
    extraReducers:{
        [getData.pending]:(state,action)=>{
            state.status='loading'
        },
        [getData.fulfilled]:(state,{payload})=>{
            state.dataList=payload
            state.status='success'
        },
        [getData.rejected]:(state,action)=>{
            state.status='failed'
        }
       
    }
})

export default dataSlice.reducer;
