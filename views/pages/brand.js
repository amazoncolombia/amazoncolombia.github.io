let Brand = {
    render: async () => {
        return `
            <div class="row">
                <div class="col p-0">
                    <img class="img-fluid" src="assets/img/adidas.jpg">
                </div>
            </div>
            <div class="row mt-4 text-left">
                <h5 class="col-12 font-weight-bold">
                    Artículos sobre Adidas
                </h5>
            </div>
            <div class="row ml-3 mr-3 mt-4">
                <div class="col-12">
                    <img class="img-fluid" src="assets/img/zapato.jpg">
                </div>
                <div class="col-12 mt-4 mb-2" style="font-size: 18px;">
                    <h5>Mejores zapatos adidas</h5>
                    <p class="text-left mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed vel finibus mi. Maecenas finibus blandit arcu, quis 
                        auctor massa malesuada id.
                    </p>
                </div>
                <a class="col-12 pt-1 pb-1 btn-yellow" href="#/article">
                    Continuar leyendo
                </a>
            </div>
            <hr>
            <div class="row mt-4 text-left">
                <h5 class="col-12 font-weight-bold">
                    Productos Adidas
                </h5>
            </div>
            <div class="row mt-3">
                <div class="col-6 p-1">
                    <img class="img-fluid" src="assets/img/categoria-marca.jpg">
                </div>
                <div class="col-6 p-1">
                    <img class="img-fluid" src="assets/img/categoria-marca.jpg">
                </div>
                <div class="col-6 p-1">
                    <img class="img-fluid" src="assets/img/categoria-marca.jpg">
                </div>
                <div class="col-6 p-1">
                    <img class="img-fluid" src="assets/img/categoria-marca.jpg">
                </div>
            </div>
            `
    },
    afterRender: async () => {

    }
};

export default Brand;