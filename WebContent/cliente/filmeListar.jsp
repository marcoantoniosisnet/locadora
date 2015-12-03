<%@page import="servico.CategoriaServico"%>
<%@page import="servico.FilmeServico"%>
<%@page import="servico.ServicoFactory"%>
<%@page import="dominio.Categoria"%>
<%@page import="dominio.Filme"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>** Locadora **</title>

<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/estilo.css" />
	
<script src="resources/jQuery/jquery-latest.js"></script>
<script src="resources/jQuery/jquery.js" type="text/javascript"></script>
<script src="resources/jQuery/jquery.cycle2.min.js" type="text/javascript"></script>

<script>
	$(function() {
						
				/* IMAGEM TOPO SLIDESHOW*/
				$('#slideShow').cycle({ fx: 'fade' });
				
				
				/* EFEITO DO MENU TOPO*/
				 $('li.menus').mousemove(function(){
					  $(this).find('ul').slideDown();
					  });
					  $('li.menus').mouseleave(function(){
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

	<h2>Lista de Filmes</h2>
	<br />
	<p>
		<a
			href="<%=request.getContextPath()%>/cliente/FilmeCRUD?cmd=escolherCategoria">Adicionar
			novo Filme</a>
	</p>
	<table border=1>
		<thead>
			<tr>
				<th>Código</th>
				<th>Nome</th>
				<th>Ano</th>
				<th>Categoria</th>
				<th colspan=2>Ação</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${lista}" var="x">
				<tr>
					<td>${x.codFilme}</td>
					<td>${x.titulo}</td>
					<td>${x.ano}</td>
					<td>${x.categoria.descricao}</td>
					<td><a
						href="<%=request.getContextPath()%>/cliente/FilmeCRUD?cmd=editar&cod=${x.codFilme}">Editar</a></td>
					<td><a
						href="<%=request.getContextPath()%>/cliente/FilmeCRUD?cmd=deletar&cod=${x.codFilme}">Excluir</a></td>
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