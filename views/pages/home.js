let Home = {
    render: async () => {
        return `
            <div class="row mb-4 pt-lg-5" id="main-logo">
                <div class="col-12" style="color: #033076; font-size: 35px; font-weight: bold; margin-bottom: 10px; height: 35px;">
                    Amazon 
                    <span style="color: #f4eb49;">Col</span>om<span style="color: #b70f0a;">bia</span>
                </div>
                <h5 class="col-12">Un afiliado de amazon.com</h5>
            </div>
            <form class="row mb-5 mx-auto search-bar">
                <select class="col-3 col-lg-1 offset-lg-3 search-category">
                    <option value="todos" selected>Todos</option>
                </select>
                <input class="col-7 col-lg-4 search-text" type="text" placeholder="Comprar en Amazon"> 
                <button class="col-2 col-lg-1 btn search-button" >
                    <svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                    </svg>
                </button>
            </form>
            <div class="row bottom-text">
                <div class="col-12 mb-4">
                    Vender en Colombia
                </div>
                <br>
                <div class="col-12 mb-4">
                    Iniciar en 
                    <span style="color:black; font-weight: bold;">amazon</span><span style="color:#fec63d; font-weight: bold;">.com</span>
                </div>
                <br>
                <div class="col-12 mb-4" style="font-weight: bold;">
                    Encuentra marcas que conoces en amazon.com
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7 row mx-auto">
                    <div class="col-4 col-lg-4 mb-4">
                        Adidas
                    </div>
                    <div class="col-4 col-lg-4 mb-4">
                        Reebok
                    </div>
                    <div class="col-4 col-lg-4 mb-4">
                        Lacoste
                    </div>
                    <div class="col-4 col-lg-4 mb-4">
                        Marca
                    </div>
                    <div class="col-4 col-lg-4 mb-4">
                        Marca
                    </div>
                    <div class="col-4 col-lg-4 mb-4">
                        Marca
                    </div>
                </div>
            </div>
            <div class="row ml-auto mr-auto mb-1">
                <a class="col col-lg-4 offset-lg-4 pt-1 pb-1 btn-blue" href="#/brand-list">Ver todas las marcas</a>
            </div>
            `
    },
    afterRender: async () => {

    }
};

export default Home;