import { createStore} from "redux"

const initialStore = {
    isLoading:true,
    errMess:null,
    data:[]
}

const rootReducer = (state= initialStore, action)=>{
    
    switch(action.type) {
        case "ADD_MEALS":
            return {
               ...state,
                isLoading: false,
                errMess:null,
                data:action.payload
            }
        case "LOADING_MEALS":
            return {
               ...state,
                errMess:null,
                isLoading: true,
                data:[]
            }
        case "ERROR_MEALS":
            return {
               ...state,
                isLoading: false,
                errMess: action.payload,
                data:[]
            }
        default:
    }
}

export default createStore(rootReducer)