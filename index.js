//alert("testando incorporação")
const form = document.getElementById('form-atividade')
const imgAprovado='<img src="/images/aprovado.png" alt="emoji festejando"/>'
const imgReprovado='<img src="/images/reprovado.png" alt="emoji decepcionado"/>'
const atividades = [] 
const notas =[]
const spanAprovado='<span class= resultado aprovado"> Aprovado </span>'
const spanReprovado='<span class= resultado reprovado"> Reprovado </span>'
const notaMinima = parseFloat( prompt("Digite a nota miníma:"))

 
let linhas =''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizarTabela()
    atualizarMediaFinal()
})
function adicionaLinha(){
    const inputNomeAtividade=document.getElementById('nome-atividade')
    const inputNotaAtividade=document.getElementById('nota-atividade')


    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade:${inputNomeAtividade.value} ja foi inserida.`);
    } 
    else{
        atividades.push(inputNomeAtividade.valeu)
        notas.push(parseFloat(inputNotaAtividade.valeu))

        let linha='<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`// esses comandos tem que ser entre crases.
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ?imgAprovado :imgReprovado}</td>`
        linha += '<tr>'

        linhas += linha
    }
    inputNomeAtividade.value=''
    inputNotaAtividade.value=''
}



function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizarMediaFinal(){
    const mediaFinal = calulaMediaFinal()

    document.getElementById('media-final-valor').innerHTML= mediaFinal
    document.getElementById('media-final-resultado').innerHTML=mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calulaMediaFinal(){
    let somaDasNotas = 0
    for ( let i =0; i< notas.length; i++){
        somaDasNotas+= notas[i];
    }
    return somaDasNotas/notas.length;

}
