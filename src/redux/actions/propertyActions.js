import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_URL } from '../../api/url'

const getProperty = createAsyncThunk('getProperty',async(valores)=>{
    try{
        const response = await axios.get(`${BASE_URL}/Properties/?${valores.location}${valores.typeProperty}`)
        return {
            response:response.data.properties,
            value: valores
        }
    }catch(error){
        return{
            payload:"Error"
        }
    }
})
const getPropertyFilter = createAsyncThunk('getPropertyFilter',async()=>{
    try{
        return {
            response:null
        }
    }catch(error){
        return{
            payload:"Error"
        }
    }
})
const propertyActions={
    getProperty
    ,getPropertyFilter
};

export default propertyActions