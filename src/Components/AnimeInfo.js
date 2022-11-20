import React from 'react'

export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},rank,popularity,type,members,episodes,rating,trailer:{url}}=props.animeInfo
  return (
    <>
        <div className="anime-content">
            
            <img src={large_image_url} alt="" /><br /><br />
            <h3>Title: {title}</h3><br />
            <div className="info">
                <h3>#Most Watched: {rank}</h3>
                <h3>#Rating:   {rating}</h3>
                <h3>#Popularity: {popularity}</h3>
                <h3>#Category : {type}</h3><hr/><br />
                <h4>Characters:{members}</h4>
                <h4>Episodes:{episodes}</h4>
                <h4><a href='{url}'>Watch Trailer</a></h4>
            </div>
        </div>
    </>
  )
}
