import {bindParamsAndApiKey} from "./NetworkUtils";

function fetchImages(params) {
    const url = bindParamsAndApiKey("https://api.unsplash.com/search/photos?", params);

    return fetch(url).then(response => response.json());
}

export {fetchImages};