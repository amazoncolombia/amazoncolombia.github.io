
// convertir a clase
let Navbar = {
    render: async () => {
        let view = `
                <nav class="row banner"> 
                    <div class="col-8 pl-0 pr-0" style="font-size: 24px; font-weight: bold;">
                        <a href="/index.html">AmazonColombia</a>
                    </div>
                    <div class="col-3 d-none d-sm-block">
                        Categorias
                    </div>
                    <div class="col-3 d-none d-sm-block">
                        0 en lista
                    </div>
                    <svg class="col-2 offset-2 d-block d-sm-none bi bi-three-dots-vertical my-auto" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/>
                    </svg>
                    <div class="col-12 container">
                        <form class="row pl-3 pr-3 pb-2 pt-2" style="background-color: #033076; height: 54px;">
                            <select class="col-3 search-category">
                                <option value="todos" selected>Todos</option>
                            </select>
                            <input class="col-7 search-text" type="text" placeholder="Comprar en amazon"> 
                            <button class="col-2 btn search-button" >
                                <svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </nav>
                `
        return view
    },
    after_render: async () => { }
}

export default Navbar;