"use strict";

import Home from "../../views/pages/home.js";
import BrandList from "../../views/pages/brandList.js";
import Brand from "../../views/pages/brand.js";
import BrandCategory from "../../views/pages/brandCategory.js";
import Article from "../../views/pages/article.js";

import Error404 from "../../views/pages/error404.js";

import Navbar from "../../views/components/navbar.js";

import Utils from "../../services/utils.js";

const routes = {
    "/": Home,
    "/brand-list": BrandList,
    "/brands/:nombre": Brand,
    "/categories/:nombre": BrandCategory,
    "/articles/:nombre": Article,
};

const router = async () => {
    
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

    header.innerHTML = await Navbar.render();
    await Navbar.afterRender();

    let request = Utils.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + 
                    (request.name ? '/:nombre' : '') + 
                    (request.verb ? '/' + request.verb : '');
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.afterRender();//añandir funciones para manejar la pagina generada.
    window.scrollTo(0, 0);
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);