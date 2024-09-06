function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
    let titulo = ""
    let descricao = "";
    let resultados = "";
    let tags = "";

    if (campoPesquisa == "") {
        section.innerHTML = "nenhum atleta foi encontrado na base de dados."
        return
    }

    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
            `
        }
    }

    if (resultados == "") {
        section.innerHTML = "Atleta não registrado na base de dados.";
        return
    }

    section.innerHTML = resultados
}



