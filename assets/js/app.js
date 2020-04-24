"use strict";

import Main from "/amazoncolombia.github.io/views/pages/main.js";
import BrandList from "/amazoncolombia.github.io/views/pages/brandList.js";
import Brand from "/amazoncolombia.github.io/views/pages/brand.js";
import Article from "/amazoncolombia.github.io/views/pages/article.js";

import Error404 from "/amazoncolombia.github.io/views/pages/error404.js";

import Navbar from "/amazoncolombia.github.io/views/components/navbar.js";

import Utils from "/amazoncolombia.github.io/services/utils.js";

const routes = {
    "/": Main,
    "/brand-list": BrandList,
    "/brand": Brand,
    "/article": Article,
};

const router = async () => {
    
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

    header.innerHTML = await Navbar.render();
    await Navbar.afterRender();

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