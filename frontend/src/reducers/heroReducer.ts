
const initialState = {
    title: '',
    description: '',
  };
  
  const heroReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_HERO_CONTENT_SUCCESS':
        return action.payload;
      case 'FETCH_HERO_CONTENT_FAILURE':
        return initialState;
      default:
        return state;
    }
  };
  
  export default heroReducer;
  