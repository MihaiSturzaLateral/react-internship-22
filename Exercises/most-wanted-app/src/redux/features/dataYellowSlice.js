import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    dataYellowList:[],
    sts:null
}

export const getYellowData=createAsyncThunk(//2 argumente - nume (ce actiune se realiz), al 2-lea argument e async function 
    'dataYellow/getData',
    async ()=>{
        const rsp= await axios.get('https://ws-public.interpol.int/notices/v1/yellow')
    return rsp.data;
    }
)

const dataYellowSlice=createSlice({
    name: 'dataYellow',
    initialState,
    extraReducers:{
        [getYellowData.pending]:(state,action)=>{
            state.sts='loading'
        },
        [getYellowData.fulfilled]:(state,{payload})=>{
            state.dataYellowList=payload
            state.sts='success'
        },
        [getYellowData.rejected]:(state,action)=>{
            state.sts='failed'
        }
       
    }
})

export default dataYellowSlice.reducer;
