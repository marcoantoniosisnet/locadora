<?xml version="1.0" encoding="ISO-8859-1" ?>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />

<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/estilos.css" />

<title>Loja Tenis</title>
</head>
<body>

	<div id="geral">
		<div id="topo">
			<%@ include file="/resources/template/topo.jsp"%>
		</div>

		<hr />

		<div id="barralateral">
			<%@ include file="/resources/template/lateral.jsp"%>
		</div>

		<hr />

		<div id="conteudo">
			<h3>Título H3</h3>
			<p>Texto texto texto texto texto texto texto texto texto texto
				texto texto texto texto texto texto texto texto texto</p>

			<h4>Título H4</h4>
			<p>Texto texto texto texto texto texto texto texto texto texto
				texto texto texto texto texto texto texto texto texto</p>
			<p>Texto texto texto texto texto texto texto texto texto texto
				texto texto texto texto texto texto texto texto texto</p>
		</div>

		<hr />

		<div id="rodape">
			<%@ include file="/resources/template/rodape.jsp"%>
		</div>
	</div>

</body>
</html>
