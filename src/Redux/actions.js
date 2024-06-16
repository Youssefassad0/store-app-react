
export const ADD_USER=(voiture)=>{
return {type:'ADD',payload:voiture}
}

export const UPDATE_USER=(newuser)=>{
    return {type:'UPDATE',payload:newuser}
}

export const DELETE_USER=(id)=>{
    return {type:'DELETE',payload:id}
}