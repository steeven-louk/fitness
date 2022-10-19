import React from 'react'

const YoutubeVideos = (props) => {

    const {yVideos, name} = props;

    return (
    <>
        <h2 className="mb-5">Watch <em className='fw-bold text-danger text-capitalize'>{name}</em> exercise videos</h2> <br />

        <div className="videos__container">
            <div className="container">
                <div className="row d-flex justify-content-center">
    
                {yVideos?.slice(0,6).map((items, index)=>(
                    <a href={`https://www.youtube.com/watch?v=${items?.video.videoId}`} target="_blank" rel='noopener noreferrer' className="card border-0 col-md-4 mb-3" key={index}>
                        <img src={items?.video.thumbnails[0].url}  alt={items?.video.title} />
                        <h5 className='text-dark'>{items?.video.title}</h5>
                    </a>
                ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default YoutubeVideos