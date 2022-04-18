import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  
  const [state, setState] = useState({
      data : [],
      loading : true
  });

  useEffect(() => {

      getGifs(category)
        .then( (gifs) => {
          setState({
            data : gifs,
            loading : false
          })
        })
        .catch(error => console.error(error))
     
  }, [category]);
  
  
   return state
}
