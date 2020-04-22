function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "JG";
    var numPalavras = $("#contador-palavras").text();
    var numCarac = $("#contador-caracteres").text();

    var linha = novaLinha(usuario,numPalavras,numCarac);
    linha.find(".botao-remover").click(removeLinha)

    corpoTabela.append(linha);
}

function novaLinha(usuario,numPalavra,numCarac){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavra);
    var colunaCarac = $("<td>").text(numCarac);
    var colunaRemover = $("<td>");
    
    var link=$("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    
    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaCarac);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(){
    event.preventDefault();
    linha=$(this).parent().parent();
    linha.fadeOut();
    setTimeout(function(){
        linha.remove();
    },2000);
};

$("#botao-placar").click(mostraPlacar);

function mostraPlacar(){

    $(".placar").slideToggle(1000);

};