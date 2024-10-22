const btnCriar = document.querySelector("#btnCriar")
const listaTarefas = document.querySelector('#listaTarefas')
const listaTarefasFeitas = document.querySelector('#listaTarefasFeitas')
const inputUsuario = document.querySelector('#inputUsuario')


const tarefas = [
    {
        titulo: "Arrumar a casa"
    },
    {
        titulo: "Estudar"
    }
]
const tarefasFeitas = [
    {
        titulo: "Tocar violão"
    },
    {
        titulo: "Ir na academia"
    }
]

window.onload = renderizarNaTela()
//READ
function renderizarNaTela(){
    listaTarefas.innerHTML=""
    tarefas.forEach(tarefa =>{
        let novaTarefa = document.createElement('li')
        novaTarefa.innerHTML = `
        <div class="tarefa bg-info-subtle d-flex align-items-center justify-content-between p-1 rounded-2">
                <button onclick="tarefaFeita(${tarefas.indexOf(tarefa)})" class="marcar btn btn-success me-3">
                        <i class="bi bi-check fs-5"></i>
                </button>

                <p class="tituloAFazer mb-0 w-100 fs-5">${tarefa.titulo}</p>

                <div class="botoes d-flex gap-2">
                    <button onclick="editarTarefa(${tarefas.indexOf(tarefa)})" class="btn btn-primary">
                        <i class="bi bi-pencil-square fs-5"></i>
                    </button>
                    <button onclick="apagarTarefa(${tarefas.indexOf(tarefa)})" class="btn btn-danger">
                        <i class="bi bi-trash fs-5"></i>
                    </button>
                </div>
                <form id="formTarefas" class="edicao hidden d-flex w-100 ">
                    <input id="inputEditar" type="text" placeholder="Edite a tarefa..." class="bg-transparent border-0 border-bottom border-primary w-100 p-1 " required>
                    <button type="submit" class="btn btn-primary rounded-circle fs-5">
                        <i class="bi bi-check"></i>
                    </button>
                </form>
            </div>
        `
        listaTarefas.append(novaTarefa)
    })
    listaTarefasFeitas.innerHTML=""
    tarefasFeitas.forEach(tarefa =>{
        let novaTarefaFeita = document.createElement('li')
        novaTarefaFeita.innerHTML = `
        <div class="tarefaFeita bg-info-subtle d-flex align-items-center justify-content-between p-1 rounded-2">
                <button onclick="desfazerTarefa(${tarefasFeitas.indexOf(tarefa)})" class="desfazer btn btn-danger me-3">
                        <i class="bi bi-x fs-5"></i>
                </button>

                <p class="tituloFeita text-decoration-line-through text-muted mb-0 w-100 fs-5">${tarefa.titulo}</p>

                <div class="botoesFeita d-flex gap-2">
                    <button onclick="editarTarefaFeita(${tarefasFeitas.indexOf(tarefa)})" class="editarFeita btn btn-primary">
                        <i class="bi bi-pencil-square fs-5"></i>
                    </button>
                    <button onclick="apagarTarefaFeita(${tarefasFeitas.indexOf(tarefa)})" class="btn btn-danger">
                        <i class="bi bi-trash fs-5"></i>
                    </button>
                </div>
                <form id="formTarefas" class="edicaoFeita hidden d-flex w-100 ">
                    <input id="inputEditarFeita" type="text" placeholder="Edite a tarefa..." class="bg-transparent border-0 border-bottom border-primary w-100 p-1 " required>
                    <button type="submit" class="btn btn-primary rounded-circle fs-5">
                        <i class="bi bi-check"></i>
                    </button>
                </form>
            </div>
        `
        listaTarefasFeitas.append(novaTarefaFeita)
    })

}
//Criar tarefa
btnCriar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault();

    if (inputUsuario.value.trim() !== "") {
        criarTarefa();
    } 
})
function criarTarefa(){
    //Pegar o nome da tarefa
    let tarefa = {
        titulo: inputUsuario.value,
    }
    //Armazenar
    tarefas.push(tarefa)
    //Atualizar
    renderizarNaTela()
    //Limpar o input
    inputUsuario.value = "";
}
//Tarefa foi feita
function tarefaFeita(idTarefa){
    //Adicionar nas tarefas feitas
    tarefasFeitas.push(tarefas[idTarefa])
    //Remover das tarefas a fazer
    tarefas.splice(idTarefa,1)
    //Atualizar
    renderizarNaTela()
}
//Desfazer tarefa
function desfazerTarefa(idTarefa){
    //Adicionar nas tarefas a fazer
    tarefas.push(tarefasFeitas[idTarefa])
    //Remover das tarefas feitas
    tarefasFeitas.splice(idTarefa,1)
    //Atualizar
    renderizarNaTela()
}
//Edição
function editarTarefa(idTarefa) {
    // Selecione o item da tarefa com base no idTarefa
    let tarefa = document.querySelectorAll('div.tarefa')[idTarefa];

    // Seleciona os elementos dentro da tarefa para aplicar as mudanças nas classes
    let marcarBtn = tarefa.querySelector('.marcar');
    let nomeTarefa = tarefa.querySelector('.tituloAFazer');
    let botoes = tarefa.querySelector('.botoes');
    let edicaoForm = tarefa.querySelector('.edicao');
    let inputEditar = tarefa.querySelector('#inputEditar');

    // Exibir o formulário de edição e esconder os botões
    marcarBtn.classList.add('hidden');
    nomeTarefa.classList.add('hidden');
    botoes.classList.add('hidden');
    edicaoFeitaForm.classList.remove('hidden');

    // Adicionar evento de submit ao formulário
    edicaoFeitaForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o reload da página no submit

        // Captura o novo valor do input e atualiza o título da tarefa
        let novoTitulo = inputEditarFeita.value;
        if (novoTitulo.trim()) {
            tarefasFeitas[idTarefa].titulo = novoTitulo;
            nomeTarefa.textContent = novoTitulo;

            // Reverter as mudanças de visualização (esconder o input e mostrar os botões novamente)
            desfazerBtn.classList.remove('hidden');
            nomeTarefa.classList.remove('hidden');
            botoesFeita.classList.remove('hidden');
            edicaoFeitaForm.classList.add('hidden');
        }
    });
}
function editarTarefaFeita(idTarefa) {
    // Selecione o item da tarefa com base no idTarefa
    let tarefa = document.querySelectorAll('div.tarefaFeita')[idTarefa];

    // Seleciona os elementos dentro da tarefa para aplicar as mudanças nas classes
    let desfazerBtn = tarefa.querySelector('.desfazer');
    let nomeTarefa = tarefa.querySelector('.tituloFeita');
    let botoesFeita = tarefa.querySelector('.botoesFeita');
    let edicaoFeitaForm = tarefa.querySelector('.edicaoFeita');
    let inputEditarFeita = tarefa.querySelector('#inputEditarFeita');

    // Exibir o formulário de edição e esconder os botões
    desfazerBtn.classList.add('hidden');
    nomeTarefa.classList.add('hidden');
    botoesFeita.classList.add('hidden');
    edicaoFeitaForm.classList.remove('hidden');

    // Adicionar evento de submit ao formulário
    edicaoFeitaForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o reload da página no submit

        // Captura o novo valor do input e atualiza o título da tarefa
        let novoTitulo = inputEditarFeita.value;
        if (novoTitulo.trim()) {
            tarefasFeitas[idTarefa].titulo = novoTitulo;
            nomeTarefa.textContent = novoTitulo;

            // Reverter as mudanças de visualização (esconder o input e mostrar os botões novamente)
            desfazerBtn.classList.remove('hidden');
            nomeTarefa.classList.remove('hidden');
            botoesFeita.classList.remove('hidden');
            edicaoFeitaForm.classList.add('hidden');
        }
    });
}

//Deletar
function apagarTarefa(idTarefa){

    //Apagar
    tarefas.splice(idTarefa,1)
    //Atualizar na tela
    renderizarNaTela()
}
function apagarTarefaFeita(idTarefa){

    //Apagar
    tarefasFeitas.splice(idTarefa,1)
    //Atualizar na tela
    renderizarNaTela()
}
