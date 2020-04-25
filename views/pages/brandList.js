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
            <div class="row mt-4 text-left">
                <h5 class="col-12 font-weight-bold">
                    Marcas compradas en Colombia
                </h5>
            </div>
            <div class="row mt-2 text-left">
                <div class="col-12" style="font-size: 18px;">
                    Artículos cortos sobre las marcas que conoces.
                </div>
            </div>
            <div class="row mt-4" style="font-size: 18px;">
                ${ brands.map(brand => 
                    `
                    <div class="col-4 col-lg-2 mb-4">
                        <a class="brand-link" href="#/brands/${brand.name.toLowerCase()}">${brand.name}</a>
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

export default BrandList;