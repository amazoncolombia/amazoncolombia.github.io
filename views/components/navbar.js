import Utils from "/amazoncolombia.github.io/services/utils.js";

// convertir a clase
let Navbar = {
    render: async () => {
        //utils. mirar si la url es la de home, si lo es quitar el buscardor.
        //crear dos view uno buscador y otro con
        //dependiendo de la url se manda el view
        let request = Utils.parseRequestURL();
        let viewSearchBar = `
                <nav class="row banner"> 
                    <div class="col-8 col-lg-3 order-lg-1 my-auto pr-1" style="font-size: 24px; font-weight: bold;">
                        <a href="#/">[AmazonColombia]</a>
                    </div>
                    <div class="col-lg-1 order-lg-3 my-auto d-none d-sm-block">
                        <a class="banner-link" href="/">Inicio</a>
                    </div>
                    <div class="col-lg-1 order-lg-4 my-auto d-none d-sm-block">
                        <a class="banner-link" href="/">Marcas</a>
                    </div>
                    <div class="col-lg-1 order-lg-5 my-auto d-none d-sm-block">
                        <a class="banner-link" href="/">Categorias</a>
                    </div>
                    <div class="col-lg-1 order-lg-6 my-auto d-none d-sm-block">
                        <a class="banner-link" href="/">0 en lista</a>
                    </div>
                    <svg class="col-2 offset-2 d-block d-sm-none bi bi-three-dots-vertical my-auto" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/>
                    </svg>
                    <div class="col-12 col-lg-5 order-lg-2 my-auto p-lg-0">
                        <form class="row m-1">
                            <select class="col-3 col-lg-2 browser-default custom-select search-category">
                                <option value="todos">Todos</option>
                                <option value="todos">Libros</option>
                                <option value="todos">Musica</option>
                                <option value="todos">Belleza y cuidad personal</option>
                            </select>
                            <input class="col-7 col-lg-9 search-text" type="text" placeholder="Comprar en amazon"> 
                            <button class="col-2 col-lg-1 btn search-button" >
                                <svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </nav>
                `
        let viewNoSearchBar = `
            <nav class="row banner"> 
                <div class="col-8 col-lg-3 order-lg-1 my-auto pr-1" style="font-size: 24px; font-weight: bold;">
                    <a href="#/">[AmazonColombia]</a>
                </div>
                <div class="col-lg-1 order-lg-3 my-auto d-none d-sm-block">
                    <a class="banner-link" href="/">Inicio</a>
                </div>
                <div class="col-lg-1 order-lg-4 my-auto d-none d-sm-block">
                    <a class="banner-link" href="/">Marcas</a>
                </div>
                <div class="col-lg-1 order-lg-5 my-auto d-none d-sm-block">
                    <a class="banner-link" href="/">Categorias</a>
                </div>
                <div class="col-lg-1 order-lg-6 my-auto d-none d-sm-block">
                    <a class="banner-link" href="/">0 en lista</a>
                </div>
                <svg class="col-2 offset-2 d-block d-sm-none bi bi-three-dots-vertical my-auto" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/>
                </svg>
                <div class="col-12 col-lg-5 order-lg-2 my-auto p-lg-0">
                    
                </div>
            </nav>
            `
        if(request.resource != ""){
            return viewSearchBar
        }else{
            return viewNoSearchBar
        }
    },
    afterRender: async () => { }
}

export default Navbar;