const prompt = require('prompt-sync') ()

const corretoras = [];

let ultimoId = 0;

const modelo = (id = ++ultimoId) => {
    const nome = prompt("Qual é seu nome: ")

    if(nome != "") {
    return {
        id,
        nome, 
        }
    }
    console.log("Digite dados válidos");
}

const criar = () => {
    const novo = model();

    if(novo){
        corretoras.push(novo);
        console.log("Registrado com sucesso: ");
    }
}
    

    const listar = () => {
        if(corretoras.length == 0){
            console.log("Nenhum registro encontrado: ")
            return false
        }

        corretoras.forEach(el => console.log(el))
        return true;
    }

const atualizar = () => {
    if(listar()){
        const id = prompt("Digite o ID: ")

        const indice = corretoras.findIndex(el => el.id == id)
        
        if(indice != -1) {
            const novo = modelo(id)

        if(novo) {
            corretoras[indice] = novo
        }
        }else{
            console.log("Este ID não existe: ")
        }
    }
}

const remover = () => {

    const user = prompt("Digite o ID a ser removido: ")

    const indice = corretoras.findIndex(el => el.id == id)


    corretoras.splice

}






















}