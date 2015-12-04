<%@page import="servico.CategoriaServico"%>
<%@page import="servico.FilmeServico"%>
<%@page import="servico.ServicoFactory"%>
<%@page import="dominio.Categoria"%>
<%@page import="dominio.Filme"%>

<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>** Locadora **</title>
<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/estilo.css" />

<script src="resources/jQuery/jquery-latest.js"></script>
<script src="resources/jQuery/jquery.js" type="text/javascript"></script>
<script src="resources/jQuery/jquery.cycle2.min.js"
	type="text/javascript"></script>

<script>
	$(function() {

		/* IMAGEM TOPO SLIDESHOW*/
		$('#slideShow').cycle({
			fx : 'fade'
		});

		/* EFEITO DO MENU TOPO*/
		$('li.menus').mousemove(function() {
			$(this).find('ul').slideDown();
		});
		$('li.menus').mouseleave(function() {
			$(this).find('ul').slideUp("fast");
		});

	});
</script>
</head>
<body>

	<div id="geral">

		<div id="topo">
			<%@include file="/resources/template/topo.jsp"%>
		</div>

		<hr />

		<div id="barralateral">
			<%@ include file="/resources/template/lateral.jsp"%>
		</div>

		<hr />
		<div id="conteudo">

			<h1>Locadora Filmes</h1>
			<h2>Entre com os dados do filme</h2>

			
					

					<form method="post"	action="<%=request.getContextPath()%>/cliente/FilmeCRUD"
						name="formFil">
						
						<table  border="1">
								<thead>
						
						<tr>
						<td>Código :</td> 
						<td><input type="text" readonly="readonly" name="codFilme"	value="${fil.codFilme}" /></td>
						 </tr>
						 
						
						 <tr>
						<td>Categoria :</td>
							<td> <input	type="text" readonly="readonly" name="categoria" value="${fil.categoria.descricao}" />
							 </td>
							  </tr>
						
							<td>  <input type="hidden" name="codCategoria"	value="${fil.categoria.codCategoria}" /> </td>
							
							 <tr>
							 <td>Titulo :</td>  
							<td> <input	type="text" name="titulo" value="${fil.titulo}" /> </td>
							 </tr>
							
							 
							  <tr>
							 <td>Ano :</td>
							 <td><input type="text" name="ano" value="${fil.ano}" /> </td>
							 
							  </tr>
							
							 <tr><td colspan="2" > <input type="submit" value="Enviar" /></td> </tr>

						<!-- Exemplo de data com JSTL: 
 Data do pedido: <input
 type="text" name="dataPedido"
 value="<fmt:formatDate pattern="dd/MM/yyyy" value="${pedido.dataPedido}" />" /> <br />
 -->
							</thead>
						</table>

					</form>
				
		</div>

		<hr />


		<div id="rodape">
			<%@ include file="/resources/template/rodape.jsp"%>
		</div>

	</div>
</body>
</html>