import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {

    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo 
            url={photo.thumbnailUrl} 
            key={photo.id}
            />;
        });
    };
    return (
        <>
           <section>{displayPhotos()}</section>
        </>
    )
}

export default PhotoContainer;