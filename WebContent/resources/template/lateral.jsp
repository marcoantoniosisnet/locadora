<%@page import="java.util.List"%>

<%@page import="dominio.Filme"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />

<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/estilo.css" />

<title>Locadora</title>
</head>
<body>

<h5>Novidades</h5>
        <ol>
			<li><a id="cat1" href="#" >Lançamento</a></li>
			<li><a id="cat2" href="#" >Série</a></li>
            <li><a id="cat3" href="#" >Blu-Ray</a></li>
        </ol>
   		<h6>Categoria</h6>
		<ul>
			<li><a id="gen1" href="#" >Ação</a></li>
			<li><a id="gen2" href="#" >Animação</a></li>
			<li><a id="gen3" href="#" >Aventura</a></li>
			<li><a id="gen4" href="#" >Comedia</a></li>
       		<li><a id="gen5" href="#" >Drama</a></li>
			<li><a id="gen6" href="#" >Ficcao</a></li>
            <li><a id="gen7" href="#" >Romance</a></li>
            <li><a id="gen8" href="#" >Suspense</a></li>
            <li><a id="gen9" href="#" >Terror</a></li>
		</ul>
		
		</body>
</html>