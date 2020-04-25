import Utils from "/amazoncolombia.github.io/services/utils.js";

let getBrand = async (name) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`./models/brands/${name}/${name}.json`, options);
        const json = await response.json();
        return json
    } catch (err) {
        alert('Error cargando marca, recargue la página.');
    }
};

let getCategories = async (name) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`./models/brands/${name}/categoryList.json`, options);
        const json = await response.json();
        return json
    } catch (err) {
        alert('Error cargando marca, recargue la página.');
    }
};

let getArticles = async (name) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`./models/brands/${name}/articleList.json`, options);
        const json = await response.json();
        return json
    } catch (err) {
        alert('Error cargando marca, recargue la página.');
    }
};

let Brand = {
    render: async () => {
        let request = Utils.parseRequestURL();
        let brand = await getBrand(request.name);
        let categories = await getCategories(request.name);
        let articles = await getArticles(request.name);
        return `
            <div class="row">
                <div class="col p-0">
                    <img class="img-fluid" src=${brand.img}>
                </div>
            </div>
            <div class="row mt-4 text-left">
                <h5 class="col-12 font-weight-bold">
                    Artículos sobre ${brand.name}
                </h5>
            </div>
            <div class="row ml-3 mr-3 mt-4">
            ${ articles.map(article => 
                `
                <div class="col-12 col-lg-3">
                    <img class="img-fluid" src=${article.img}>
                </div>
                <div class="col-12 mt-4 mb-2" style="font-size: 18px;">
                    <h5>${article.title}</h5>
                    <p class="text-left mt-2">
                        ${article.text}
                    </p>
                </div>
                <a class="col-12 pt-1 pb-1 btn-yellow" href="#/articles${article.url}">
                    Continuar leyendo
                </a>
                `
                ).join('')
            }
            </div>
            <div class="row mt-4 text-left">
                <h5 class="col-12 font-weight-bold">
                    Productos Adidas
                </h5>
            </div>
            <div class="row mt-3">
                ${ categories.map(category => 
                    `
                    <div class="col-6 p-1">
                        <a href="/#/categories${category.url}"><img class="img-fluid" src=${category.img}></a>
                    </div> 
                    `
                    ).join('')
                }
            </div>
            `
    },
    afterRender: async () => {

    }
};

export default Brand;