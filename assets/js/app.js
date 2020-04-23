"use strict";

import Main from "/amazoncolombia.github.io/views/pages/main.js";
import Error404 from "/amazoncolombia.github.io/views/pages/error404.js";

import Utils from "/amazoncolombia.github.io/services/utils.js";

const routes = {
    "/": Main,
};

const router = async () => {
    
    const content = null || document.getElementById("content");

    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + 
                    (request.id ? '/:id' : '') + 
                    (request.verb ? '/' + request.verb : '');
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.afterRender();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);