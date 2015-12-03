$(function() {
	$('.field, textarea').focus(function() {
        if(this.title==this.value) {
            this.value = '';
        }
    }).blur(function(){
        if(this.value=='') {
            this.value = this.title;
        }
    });
    
	$('#slider ul.slider-items').jcarousel({
		'speed': 'slow',
		'scroll': 1,
		'auto': 4,
		'wrap': 'both',
        initCallback: mycarousel_initCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemVisibleInCallback: {
			onAfterAnimation: function(c, o, i, s) {
				jQuery('.slider-controls li').removeClass('active');
				jQuery('.slider-controls li:eq('+ (i-1) +')').addClass('active');
			}
		}
	});
	
	$('#pr-slider').jcarousel({
		'speed': 'slow',
		'scroll': 1,
		'auto': 3,
		'wrap': 'both'
	});
	
	if ($.browser.msie && $.browser.version == 6) {
		DD_belatedPNG.fix('.inner, #wrapper, h1#logo a, #header, .header-inner, a.view-account, .widget h2, .search-button , .search-button input, .search-options li a, #navigation li a, #navigation li a span, .slider-frame, .pr-info, .pr-price, .jcarousel-prev, .jcarousel-next, p.more a, #footer, .box-title img, .box-title h4, #sidebar');
	}
	
});

function mycarousel_initCallback(carousel) {
    var i = 1;
    $('.slider-items li').each(function(){
    	$('.slider-controls ul').append('<li><a href="#">' + i + '</a></li>');
    	i++;
    });
    $('.slider-controls a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });
	$('.slider-controls').css('margin-left', function(){
		return -($(this).find('ul').width() / 2 + 7) + 'px';
	});
};

function destaqueMenu(imagem){
	$('#barraMenu'+imagem).stop().animate({boxShadow: '0 0 20px #fff'}, 200);
}
function normalizaMenu(imagem){
	$('#barraMenu'+imagem).stop().animate({boxShadow: '0 0 0px #'}, 200);	
}

function ampliaFoto(foto){
	document.getElementById("fotoGrande").innerHTML="<div style='position:fixed; z-index: 1054; left:0px; top:0px; width:100%; height:100%; background-color:rgba(0,0,0,0.8); text-align:center;'>			<img style='margin:auto; max-height:100%; max-width:100%;'  src='"+ document.getElementById("imgDestaque").src+"';/><a role='button' style='z-index:1029; width:100px; height:23px;top:30px; position:absolute' onClick='fechaFoto()'><img src='css/images/fechar.png' /></a> </div>";
}

function fechaFoto(){
	document.getElementById("fotoGrande").innerHTML="";
}

function trocaFoto(miniatura){
	var x = document.getElementById("imgDestaque").src;
	var y = document.getElementById(miniatura).src
	
	document.getElementById("imgDestaque").src = y;
	document.getElementById(miniatura).src = x;
	document.getElementById("zoomWindowMS").style.backgroundImage = "url('" + y + "')";
	
}


function logoff(){
	var confirma = window.confirm("Você está saindo do Mad Trace");
	if (confirma) {
		window.location="logoff.php";
	}

}

function mensagemBotaoPagar(qtdItens){
	var aviso;
	var r = window.confirm("VOCÊ JÁ CONFERIU AS MEDIDAS DA SUA CAMISETA?");
	if (r == true) {
		if(qtdItens > 0){
		window.location="pagamento.php";
		}else{
			window.alert("Você não possui produtos no carrinho");
		}
	} else {
		window.location="http://madtrace.com.br/blogPost.php?idx=19";	
	}

		
}

function atualizaAnuncioPorEstoqueSexo(){
	document.getElementById("tamanho").value = "";
	var cor = "<option></option>";
	for(aux=1; aux < parseInt(document.getElementById("qtdEstoque").value); aux++){
		if((document.getElementById("sexo"+aux).value == document.getElementById("sexo").value) &&((document.getElementById("disp"+aux).value == "Sim") || document.getElementById("qtdDisp"+aux).value > 0)){
			if(cor.indexOf(document.getElementById("cor"+aux).value) == -1)
				cor = cor+"<option>"+document.getElementById("cor"+aux).value+"</option>";
		}
	}
	document.getElementById("cor").innerHTML = cor;
	document.getElementById("quantidade").innerHTML = "";

	
	document.getElementById("tamanho").innerHTML = "";
	
}

function atualizaAnuncioPorEstoqueCor(){
	document.getElementById("tamanho").innerHTML = "";
	document.getElementById("quantidade").innerHTML = "";
	var tamanho = "<option></option>";
	for(aux=1; aux < parseInt(document.getElementById("qtdEstoque").value); aux++){
		if((document.getElementById("sexo"+aux).value == document.getElementById("sexo").value) && (document.getElementById("cor"+aux).value == document.getElementById("cor").value) && (document.getElementById("disp"+aux).value == "Sim" || document.getElementById("qtdDisp"+aux).value > 0)){
			tamanho = tamanho+"<option>"+document.getElementById("tamanho"+aux).value+"</option>";
		}
	}
	document.getElementById("tamanho").innerHTML = tamanho;
	document.getElementById("quantidade").innerHTML = "";

	
}

function atualizaAnuncioPorEstoqueTamanho(){
	document.getElementById("quantidade").innerHTML = "";
		var quantidade = "<option></option>";
	for(aux=1; aux < parseInt(document.getElementById("qtdEstoque").value); aux++){
		if((document.getElementById("sexo"+aux).value == document.getElementById("sexo").value) && (document.getElementById("tamanho"+aux).value == document.getElementById("tamanho").value)&& (document.getElementById("cor"+aux).value == document.getElementById("cor").value)){
			if(document.getElementById("disp"+aux).value == "Sim"){
				for(aux2=1; aux2<=20; aux2++)
					quantidade = quantidade+"<option>"+aux2+"</option>";
				
			}else{
				var qtdDispProd = parseInt(document.getElementById("qtdDisp"+aux).value);
			for(aux2=1; aux2<=qtdDispProd; aux2++){
					quantidade = quantidade+"<option>"+aux2+"</option>";
				}
			}
		}
	}
	document.getElementById("quantidade").innerHTML = quantidade;	
}

function codRstreamento(){
	if(document.getElementById("statusEnvio").value == "Enviado"){
		data = new Date();
		dia = data.getDate();
		if(dia <10)
			dia = "0"+dia;
			
		mes = data.getMonth()+1;
		if(mes <10)
			mes = "0"+mes;
			
		ano = data.getFullYear();
		hoje = ano+"-"+mes+"-"+dia;
		document.getElementById("codEnvioProduto").innerHTML = '<label>Código para restreamento:</label> <input class="sombraInput" type="text" name="codEnvio" maxlength="20" size="20" /> <br> <label>Data do envio:</label> <input name="dtEnvio" id="dtEnvio" type="date" value="'+hoje+'"/> <br>';
	}else{
		document.getElementById("codEnvioProduto").innerHTML = "";
	}
	
}