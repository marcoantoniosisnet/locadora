function validacaoEmail(formulario, campo) { 
valor = document.forms[formulario][campo].value;
if(valor.indexOf("@")<1 || valor==""){
		 window.alert("E-mail invalido"); 
		 return false;
	}	
usuario = valor.substring(0, valor.indexOf("@")); 
dominio = valor.substring(valor.indexOf("@")+ 1, valor.length); 
if ((usuario.length >=1) && 
	(dominio.length >=3) && 
	(usuario.search("@")==-1) && 
	(dominio.search("@")==-1) && 
	(usuario.search(" ")==-1) && 
	(dominio.search(" ")==-1) && 
	(dominio.search(".")!=-1) && (dominio.indexOf(".") >=1)&& 
	(dominio.lastIndexOf(".") < dominio.length - 1)) { 
	return true;
	} else{
		 window.alert("E-mail invalido"); 
		 return false;
	} 
}

function IsCEP(strCEP){
            // Caso o CEP não esteja nesse formato ele é inválido!
            var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
 
            strCEP = Trim(strCEP)
            if(strCEP.length > 0)
                {
                    if(objER.test(strCEP))
                        return true;
                    else
						window.alert("Digite um CEP válido contendo apenas números (sem separar com espaço ou barra.");
                        return false;
                }
        }


function validarCadUsuerUpdate(formulario){
	if((document.forms[formulario]["novaSenha"].value != "") && (document.forms[formulario]["novaSenha"].value != document.forms[formulario]["confirmNovaSenha"].value)){
		window.alert("Nova senha e confirmação da nova senha são diferentes. Tente novamente.");
		return false;
	}
	
	if(document.forms[formulario]["senha"].value == ""){
		window.alert("Informe a senha atual para poder confirmar a atualização.");
		return false;
	}
	
		
	if(document.forms[formulario]["nascimento"].value == "" || document.forms[formulario]["nascimento"].value.lastIndexOf("/")!=5){
		window.alert("Informe a data de nascimento do usuário no formato dia (2 digitos), mês (2 digitos) e ano (4 digitos)");
		return false;
	}
	
	if(document.forms[formulario]["cidade"].value == ""){
		window.alert("Informe a cidade onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["estado"].value == ""){
		window.alert("Informe o estado onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["cep"].value == ""){
		window.alert("Informe o CEP da rua onde o usuário reside");
		return false;
	}
	
	IsCEP(document.forms[formulario]["cep"].value);
	
	if(document.forms[formulario]["rua"].value == ""){
		window.alert("Informe o nome da rua onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["numero"].value == ""){
		window.alert("Informe o número da casa ou prédio onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["telefone"].value == ""){
		window.alert("Informe um número de telefone para contato");
		return false;
	}
	
	return validacaoEmail(formulario, "email");
		
		
}

function validarComprar(formulario){
	if(document.forms[formulario]["sexo"].value == ""){
		window.alert("Escolha se o modelo é Feminino ou Masculino");
		return false;
	}	
	
	if(document.forms[formulario]["cor"].value == "naoSelecionado"){
		window.alert("Escolha a cor da camiseta");
		return false;
	}
	
	if(document.forms[formulario]["tamanho"].value == ""){
		window.alert("Escolha o tamanho da camiseta");
		return false;
	}
	
	if(document.forms[formulario]["quantidade"].value == ""){
		window.alert("Informe a quantidade");
		return false;
	}
	
	return true;
		
}

function validarFormLogin(formulario){
	if(document.forms[formulario]["senha"].value == ""){
		window.alert("Digite sua senha");
		return false;
	}
	
	return validacaoEmail(formulario, "usuario");
		
}

function validarCadastroAdmin(formulario){
	if(document.forms[formulario]["nome"].value == "" || document.forms[formulario]["nome"].value.indexOf(" ")<1){
		window.alert("Informe o nome completo do usuário");
		return false;
	}

	
	if((document.forms[formulario]["senha"].value == "") || (document.forms[formulario]["senha"].value != document.forms[formulario]["confirmSenha"].value)){
		window.alert("Senha e confirmação da senha não foram preenchidas corretamente ou são diferentes. Tente novamente.");
		return false;
	}
	
	if(document.forms[formulario]["cargo"].value == ""){
		window.alert("Informe o cargo do usuário");
		return false;
	}
	
	if(document.forms[formulario]["nivel"].value == ""){
		window.alert("Informe o nivel do usuário");
		return false;
	}
	
	if(document.forms[formulario]["nascimento"].value == "" || document.forms[formulario]["nascimento"].value.lastIndexOf("/")!=5){
		window.alert("Informe a data de nascimento do usuário no formato dia (2 digitos), mês (2 digitos) e ano (4 digitos)");
		return false;
	}
	
	if(document.forms[formulario]["cidade"].value == ""){
		window.alert("Informe a cidade onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["estado"].value == ""){
		window.alert("Informe o estado onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["cep"].value == ""){
		window.alert("Informe o CEP da rua onde o usuário reside");
		return false;
	}
	
	IsCEP(document.forms[formulario]["cep"].value);
	
	if(document.forms[formulario]["rua"].value == ""){
		window.alert("Informe o nome da rua onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["numero"].value == ""){
		window.alert("Informe o número da casa ou prédio onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["telefone"].value == ""){
		window.alert("Informe um número de telefone para contato");
		return false;
	}
	
	return validacaoEmail(formulario, "email");
		
}

function validarPostagemBlog(formulario){
	if(document.forms[formulario]["titulo"].value == ""){
		window.alert("A postagem deve conter um título");
		return false;
	}
	
	if(document.forms[formulario]["imagem"].value == ""){
		window.alert("A postagem deve conter uma imagem");
		return false;
	}
	
	return true;
		
}

function validarCadastroProduto(formulario){
	
	if(document.forms[formulario]["nomeProduto"].value == ""){
		window.alert("Informe o nome do produto");
		return false;
	}
	
		if(document.forms[formulario]["preco"].value == "" || document.forms[formulario]["preco"].value.search(".")!=0 || document.forms[formulario]["preco"].value.search(",")!=-1){
		window.alert("Informe o preço do produto separando a casa dos centavos com ponto. Ex: 39.90");
		return false;
	}
	
	if(document.forms[formulario]["disponibilidade"].value == ""){
		window.alert("Informe no campo 'Sempre disponível?' se o produto estará disponível no site mesmo quando não houver unidades em estoque");
		return false;
	}
	
	if(document.forms[formulario]["disponibilidade"].value == "Não" && (document.forms[formulario]["qtdDisponivel"].value == "" || document.forms[formulario]["qtdDisponivel"].value < 1)){
		window.alert("Informe a quantidade disponível em estoque");
		return false;
	}
	
	if(document.forms[formulario]["sexo"].value == ""){
		window.alert("Informe se o produto é:\nMasculino\nou\nFeminino");
		return false;
	}
	
	if(document.forms[formulario]["cor"].value == ""){
		window.alert("Selecione a cor");
		return false;
	}
	
		if(document.forms[formulario]["tamanho"].value == ""){
		window.alert("Informe o tamanho");
		return false;
	}
	
	if(document.forms[formulario]["img1"].value == ""){
		window.alert("Envie pelo menos 1 imagem do produto");
		return false;
	}
	
	for(aux=2;aux<9;aux++){
		if((document.forms[formulario]["img"+aux].value != "") && (document.forms[formulario]["img"+(aux-1)].value == "")){
			window.alert("As fotos devem ser enviadas em ordem.\nVerifique se a ordem das fotos não foi desrespeitada.\nEnvie a foto "+(aux-1)+" antes da foto "+(aux));
			return false;
		}
	}
	
	document.getElementById("aguarde").innerHTML="<div style='position:fixed; z-index: 1054; margin:auto;  height:100%; width:100%; background-color:rgba(0,0,0,0.8); text-align:center; padding-top:300px'><h1 style='color:#FFF; font-size:36px'>Aguarde...</h1><br><img style='margin:auto;'  src='css/images/loading.gif';/> </div>";
	
	return true;
	
}

function validarCadastroUsuario(formulario){
	if(document.forms[formulario]["nome"].value == "" || document.forms[formulario]["nome"].value.indexOf(" ")<1){
		window.alert("Informe o nome completo do usuário");
		return false;
	}

	
	if((document.forms[formulario]["senha"].value == "") || (document.forms[formulario]["senha"].value != document.forms[formulario]["confirmSenha"].value)){
		window.alert("Senha e confirmação da senha não foram preenchidas corretamente ou são diferentes. Tente novamente.");
		return false;
	}
		
	if(document.forms[formulario]["nivel"].value == ""){
		window.alert("Informe o nivel do usuário");
		return false;
	}
	
	if(document.forms[formulario]["nascimento"].value == "" || document.forms[formulario]["nascimento"].value.lastIndexOf("/")!=5){
		window.alert("Informe a data de nascimento do usuário no formato dia (2 digitos), mês (2 digitos) e ano (4 digitos)");
		return false;
	}
	
	if(document.forms[formulario]["cidade"].value == ""){
		window.alert("Informe a cidade onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["estado"].value == ""){
		window.alert("Informe o estado onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["cep"].value == ""){
		window.alert("Informe o CEP da rua onde o usuário reside");
		return false;
	}
	
	IsCEP(document.forms[formulario]["cep"].value);
	
	if(document.forms[formulario]["rua"].value == ""){
		window.alert("Informe o nome da rua onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["numero"].value == ""){
		window.alert("Informe o número da casa ou prédio onde o usuário reside");
		return false;
	}
	
	if(document.forms[formulario]["telefone"].value == ""){
		window.alert("Informe um número de telefone para contato");
		return false;
	}
	
	return validacaoEmail(formulario, "email");
		
}

function validarFormContato(formulario){
	if(document.forms[formulario]["nome"].value == ""){
		window.alert("Informe o seu nome por favor");
		return false;
	}
	
	if(document.forms[formulario]["assunto"].value == ""){
		window.alert("Informe o assunto da mensagem");
		return false;
	}
	
	if(document.forms[formulario]["mensagem"].value == ""){
		window.alert("Digite a sua mensagem por favor");
		return false;
	}
	
	return validacaoEmail(formulario, "email");
		
}

function validarEditarProduto(formulario){
	
	if(document.forms[formulario]["nomeProduto"].value == ""){
		window.alert("Informe o nome do produto");
		return false;
	}
	
		if(document.forms[formulario]["preco"].value == "" || document.forms[formulario]["preco"].value.search(".")!=0 || document.forms[formulario]["preco"].value.search(",")!=-1){
		window.alert("Informe o preço do produto separando a casa dos centavos com ponto. Ex: 39.90");
		return false;
	}
	
	if(document.forms[formulario]["disponibilidade"].value == ""){
		window.alert("Informe no campo 'Sempre disponível?' se o produto estará disponível no site mesmo quando não houver unidades em estoque");
		return false;
	}
	
	if(document.forms[formulario]["disponibilidade"].value == "Não" && (document.forms[formulario]["qtdDisponivel"].value == "" || document.forms[formulario]["qtdDisponivel"].value < 1)){
		window.alert("Informe a quantidade disponível em estoque");
		return false;
	}
	
	if(document.forms[formulario]["sexo"].value == ""){
		window.alert("Informe se o produto é:\nM: Masculino\nF: Feminino\nU: Unisex");
		return false;
	}
	
	document.getElementById("aguarde").innerHTML="<div style='position:fixed; z-index: 1054; margin:auto;  height:100%; width:100%; background-color:rgba(0,0,0,0.8); text-align:center; padding-top:300px'><h1 style='color:#FFF; font-size:36px'>Aguarde...</h1><br><img style='margin:auto;'  src='css/images/loading.gif';/> </div>";
	
	return true;
	
}

function validarInserirEstoque(formulario){
	if((document.forms[formulario]["disponibilidade"].value != "Sim" && document.forms[formulario]["disponibilidade"].value != "Não") || document.forms[formulario]["disponibilidade"].value == ""){
		window.alert("O Campo 'Sempre disponível?' deve ser preenchido com 'Sim' ou 'Não'");
		return false;
	}
	
	if(document.forms[formulario]["qtdDisp"].value == ""){
		window.alert("Informe a quantidade disponível em estoque.");
		return false;
	}
	
	if(document.forms[formulario]["sexo"].value == ""){
		window.alert("Informe o sexo");
		return false;
	}
	
	
	if(document.forms[formulario]["tamanho"].value == ""){
		window.alert("Informe o tamanho");
		return false;
	}
	
	if(document.forms[formulario]["cor"].value == ""){
		window.alert("Informe a cor");
		return false;
	}
	
	return true;
		
}

function validarNovaSenhaForm(formulario){
	
	if(document.forms[formulario]["novaSenha"].value == ""){
		window.alert("Informe a nova senha");
		return false;
	}
	
	if(document.forms[formulario]["confirmNovaSenha"].value == ""){
		window.alert("Confirme a nova senha");
		return false;
	}

	if((document.forms[formulario]["novaSenha"].value != "") && (document.forms[formulario]["novaSenha"].value != document.forms[formulario]["confirmNovaSenha"].value)){
		window.alert("Nova senha e confirmação da nova senha são diferentes. Tente novamente.");
		return false;
	}
	
	return true;
		
		
}