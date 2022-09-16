const initialState={
    data:[]
}

const reducerReport=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_REPORT':
            return{
                data:action.payload
            }
        case 'ADD_REPORT':
            return{
                data:[...state.data,action.payload]
            }
        case 'DELETE_REPORT':
            return{
                data:state.data.filter(item=> item.id !== action.payload)
            }
        case 'updateReport':
            return{
                data: state.data.map((item)=>{
                    if(item.id===action.payload.id)
                    return { ...item, ...action.payload };
                 else {
                  return item;
                 }
                })
            }
        default: 
            return state;
    }
}

export default reducerReport;