let getBrands = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch("./models/brands/brandList.json", options);
        const json = await response.json();
        return json
    } catch (err) {
        alert('Error cargando marcas, recargue la página.');
    }
}

let BrandList = {
    render: async () => {
        let brands = await getBrands();
        return `
            <div class="row">
                <div class="col-lg-10 row mx-auto text-left">
                    <h5 class="col-12 mt-4 font-weight-bold">
                        Marcas compradas en Colombia
                    </h5>
                    <div class="col-12 mt-2" style="font-size: 18px;">
                        Artículos cortos sobre las marcas que conoces.
                    </div>
                    ${ brands.map(brand => 
                        `
                        <div class="col-4 col-lg-2 mt-4 text-center" style="font-size: 18px";>
                            <a class="brand-link" href="#/brands/${brand.name.toLowerCase()}">${brand.name}</a>
                        </div>    
                        `
                        ).join('')
                    }
                </div>
            </div>
            `
    },
    afterRender: async () => {

    }
};

export default BrandList;