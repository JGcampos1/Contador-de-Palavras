function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $(".nome-Iput").val();
    var numPalavras = $("#contador-palavras").text();
    var numCarac = $("#contador-caracteres").text();
        
    var linha = novaLinha(usuario,numPalavras,numCarac);
    linha.find(".botao-remover").click(removeLinha)

    corpoTabela.append(linha);
    $(".placar").slideToggle(500);
    scrollPlacar();

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
    $(".placar").stop().slideToggle(1000);
};

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("html, body").animate(
    {
        scrollTop: posicaoPlacar
    }, 1000);
}