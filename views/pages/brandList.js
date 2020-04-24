let BrandList = {
    render: async () => {
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
            <div id="marcas" class="row mt-4" style="font-size: 18px;">
                <div class="col-4 col-lg-2 mb-4">
                    <a class="brand-link" href="#/brand">Adidas</a>
                </div>
                <div class="col-4 col-lg-2 mb-4">
                    Reebok
                </div>
                <div class="col-4 col-lg-2 mb-4">
                    Lacoste
                </div>
                <div class="col-4 col-lg-2 mb-4">
                    Marca
                </div>
                <div class="col-4 col-lg-2 mb-4">
                    Marca
                </div>
                <div class="col-4 col-lg-2 mb-4">
                    Marca
                </div>
            </div>
            `;
    },
    afterRender: async () => {

    }
};

export default BrandList;