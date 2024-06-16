const initialState={
    voitures:[
        {id:1,marque:'ford',modele:2022},
        {id:2,marque:'audi',modele:2024},
        {id:3,marque:'bmw',modele:2023},
    ]
}
const reducer=(state=initialState,action)=>{
switch(action.type){
    case 'ADD':
    return {...state,voitures:[...state.voitures,{...action.payload,id:state.voitures.length+1}]};
    case 'UPDATE':
        const voiture=state.voitures.find(v=>v.id===parseInt(action.payload.id))
        if(voiture){
            voiture.marque=action.payload.marque;
            voiture.modele=action.payload.modele;
        }
    return state ;
    case 'DELETE':
        return {...state,voitures:[...state.voitures.filter(v=>v.id!==action.payload)]}
    default :
    return state;
}
}
export default reducer;