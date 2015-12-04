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

	<h1>Inserir novo Filme</h1>
	<hr />
	<h2>Escolha a categoria</h2>
	<br />
	<table border=1>
		<thead>
			<tr>
				<th>Código</th>
				<th>Descricao</th>
				
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${lista}" var="x">
				<tr>
					<td>${x.codCategoria}</td>
					<td>${x.descricao}</td>
					
					<td><a
						href="<%=request.getContextPath()%>/cliente/FilmeCRUD?cmd=novo&codCategoria=${x.codCategoria}">
						Opcao</a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	</div>

		<hr />


       <div id="rodape">
			<%@ include file="/resources/template/rodape.jsp"%>
		</div>
	
	</div>
</body>
</html>