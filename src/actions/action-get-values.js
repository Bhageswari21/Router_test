import axios from "axios";

import ACTION_TYPES from '../actions/actionTypes';
const getAbilities = (name) => async (dispatch) => {
  await axios
    .get("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((res) => {
      console.log(" success", res.data);
      dispatch(getData(res.data));
    })
    
    .catch((error)=> {
      dispatch(getError(error));
      console.log("Error",error.data);

    })
};

const getData = (result) => {   
  return {
    type: ACTION_TYPES.FETCH_SUCCESS,
    payload: result.abilities,
  };
};
const getError = (error) => {
  return {
    type: ACTION_TYPES.FETCH_FAIL,
    payload: true,
  };
};


export default getAbilities;