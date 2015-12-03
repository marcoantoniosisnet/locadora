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
<title>Teste CRUD</title>
</head>
<body>
	<h1>Teste de CRUD Filmes</h1>
	<h2>Entre com os dados do filme</h2>
	<form method="post"
		action="<%=request.getContextPath()%>/cliente/FilmeCRUD"
		name="formFil">
		Código : <input type="text" readonly="readonly" name="codFilme"
			value="${fil.codFilme}" /> <br /> Categoria : <input type="text"
			readonly="readonly" name="categoria" value="${fil.categoria.descricao}" /> <br />

		<input type="hidden" name="codCategoria"
			value="${fil.categoria.codCategoria}" /> Titulo : <input type="text"
			name="titulo" value="${fil.titulo}" /> <br /> Ano : <input type="text"
			name="ano" value="${fil.ano}" /> <br /> <input type="submit"
			value="Enviar" />
			
		<!-- Exemplo de data com JSTL: 
 Data do pedido: <input
 type="text" name="dataPedido"
 value="<fmt:formatDate pattern="dd/MM/yyyy" value="${pedido.dataPedido}" />" /> <br />
 -->
	</form>
</body>
</html>