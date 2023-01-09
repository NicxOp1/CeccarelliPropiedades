import {createReducer} from '@reduxjs/toolkit'
import propertyActions from '../actions/propertyActions'

const {getProperty/* ,getPropertyFilter,editCity,deleteCity,getMyCities */}= propertyActions
const initialState = {
    property:[],
    valueHome:{}
    /* ,errors: [] */
};

const propertyReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(getProperty.fulfilled,(state,action)=>{//state:estado original
        //action:
        
        return{
            ...state,//le agrego el valor siguiente 
            property:action.payload.response,
            valueHome:action.payload.value//payload :caja que recibe modificaciones que le da las acciones
            //y el payload 
        }
    })
/*     .addCase(getPropertyFilter.fulfilled, (state, action) => {

        return {
          ...state,
          ...action.payload,
        }
    })
    .addCase(deleteCity.fulfilled, (state,action) =>{

        let cities = state.city.filter( e => e._id !== action.payload.eliminate.id)

        return{
            ...state,
            city: cities,

        }
    })
    .addCase(editCity.fulfilled, (state,action) =>{

        if (action.payload.success) {
            let cities = state.city.filter( e => e._id !== action.payload.cityUpdate._id)

            cities.push(action.payload.cityUpdate)

            return{
            ...state,
            city: cities,

            } 
        }else{
            return{
                ...state,
                errors: action.payload.messagge
            }
        }
        
    }) 
    .addCase(getMyCities.fulfilled, (state,action) =>{

        return{
            ...state,
            city: action.payload.city,
            

        }
    }) */
})
export default propertyReducer
