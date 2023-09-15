
export const fetchHeroContent = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('/api/hero-content');
        const data = await response.json();
        dispatch({ type: 'FETCH_HERO_CONTENT_SUCCESS', payload: data });
      } catch (error) {
        console.error(error);
        dispatch({ type: 'FETCH_HERO_CONTENT_FAILURE' });
      }
    };
  };
  