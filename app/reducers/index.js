import Axios from "axios";

const initialState = {
  candies: []
}

const GOT_CANDIES = 'GOT_CANDIES'

const gotCandies = candies => {
  return {
    type: GOT_CANDIES,
    candies
  }
}

export const gettingCandies = () => {
  return async dispatch => {
    try {
      const { data } = await Axios.get('/api/candies')
      dispatch(gotCandies(data)) 
    } catch (error) {
      console.log('Houston, we have a problem')
    }
  }
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
    return {...state, candies: [...state.candies, action.candies]}
    default:
      return state
  }
}

export default rootReducer
