import React from "react";
import Gallery from "react-photo-gallery";
import ImgFlipService from '../services/imgFlipService';

export default function Home() {
    var imgFlipService = new ImgFlipService();

    const [memeData, setMemeData] = React.useState([]);
    const [images, setImages] = React.useState([]);

    function createImageDictionaryFromData(data) {
        var photos = []
        data.forEach(image => photos.push({
                                              src: image.url,
                                              width: image.width,
                                              height: image.height
                                          }));
        setImages(photos);

    }

    React.useEffect(() => {
        imgFlipService.get_recent_memes().then(response => setMemeData(response.data['memes']))
    }, []);

    React.useEffect(() => {
        createImageDictionaryFromData(memeData);
        // memeData.forEach(data => console.log(data))
    }, [memeData]);

    return (
        <React.Fragment>
            <Gallery photos={images}/>
        </React.Fragment>
    )
}
