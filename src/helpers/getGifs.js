import React from 'react'

export const getGifs = async (category) => {
 
    try {
        const apiKey = "Tkqr93amZJBgEarb3Al843b8llUpwDYC";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12&offset=0&rating=g&lang=en`;

        const response = await fetch(url);
        const {data} = await response.json();
        
        const gifs = data.map( gif => (
            {
                id : gif.id,
                title : gif.title,
                url : gif.images.downsized_medium.url
            }
        ))
        
        
        
        return gifs

    } catch (error) {
        console.error(error);
        return []
    }
}
