export const ADD_FEATURE = "ADD_FEATURE";

//action payload needs to be an updated features array
  
export const addFeature = (feature) => {
    return {type: 'ADD_FEATURE', payload: feature}
}

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (id, state) => {
  //needs to filter through state.features
  //checking each id to see if it matches the one that got clicked
  //if it doesn't return the item.
  return {
    type: REMOVE_FEATURE
    // payload: changedState
  };
};
