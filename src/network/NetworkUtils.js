function bindApiKey(url, API_KEY="930640e0b7713dca3ab1a0751b6f4b4741d1dfca6a72be2a071cddd6c1d0c92c" ) {
    return `${url}client_id=${API_KEY}`;
}

function stringifyParams(params) {
    const paramsEntries = Object.entries(params);
    let URL = "";

    paramsEntries.forEach((entry) => URL += `${entry[0]}=${entry[1]}&`);

    URL = URL.substring(0, URL.length-1);

    return URL;
}

function bindParamsAndApiKey(url, params) {
    const urlWithApiKey = bindApiKey(url);
    const requestPayload = stringifyParams(params);

    return `${urlWithApiKey}&${requestPayload}`;
}

export {bindParamsAndApiKey}