const recent_memes = "https://api.imgflip.com/get_memes"

export default class ImgFlipService {

    get_recent_memes = () =>
        fetch(recent_memes)
            .then(response => response.json())

}
