<%@page import="java.util.List"%>
<%@page import="dominio.Filme"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />

<link rel="stylesheet" type="text/css"
	href="<%=request.getContextPath()%>/resources/css/estilo.css" />
	
	<script src="resources/jQuery/jquery-latest.js"></script>
<script src="resources/jQuery/jquery.js" type="text/javascript"></script>
<script src="resources/jQuery/jquery.cycle2.min.js" type="text/javascript"></script>

<title>Locadora</title>
</head>
<body>
 
 <div id="logTopo">
        	<img src="/WebInterLocadora/resources/img/log_topo.jpg" height="125" width="200" />
       </div>      
    
		     <div id="slideShow">
				<img class="carosel" src="/WebInterLocadora/resources/img/topo01.jpg" />
                <img class="carosel" src="/WebInterLocadora/resources/img/topo02.jpg" />
                <img class="carosel" src="/WebInterLocadora/resources/img/topo03.jpg" />
                <img class="carosel" src="/WebInterLocadora/resources/img/topo04.jpg" />
                <img class="carosel" src="/WebInterLocadora/resources/img/topo05.jpg" />
			</div>
    
    
        
        <div id="menu">
   		 <ul id="nav">
      		  <li class="menus"><a href="cliente/inicio.jsp">Inicio</a>
       		  </li>
        
            <li class="menus" id="menus_01"><a href="#">Categoria</a>
                <ul id="sub_01">
                    <li><a href="#">Lançamento</a></li>
                    <li><a href="#">Aventura</a></li>
                    <li><a href="#">Acao</a></li>
                    <li><a href="#">Comedia</a></li>
                    <li><a href="#">Romance</a></li>
                    <li><a href="#">Terror</a></li>
                </ul>
            </li>
        
            <li class="menus" id="menus_02"><a href="#">Empresa</a>
                 <ul id="sub_02">
                    <li><a id="sobre" href="#">Sobre</a></li>
                    <li><a id="noticias" href="#">Noticias</a></li>
                    <li><a href="cadastraFilme.jsp">Cad. Filmes</a></li>
                 </ul>
            </li>
        
            <li class="menus" id="menus_03"><a href="#">Login</a>
                <ul id="sub_03">
                    <li><a id="login" href="#">Fazer Login</a></li>
                    <li><a href="cadastroCliente.jsp">Cadastre-se</a></li>
                </ul>
            </li>
        
            <li class="menus" id="menus_04"><a href="#">Contato</a>
                <ul id="sub_04">
                    <li><a class="contato" href="#">Chat</a></li>
                    <li><a class="contato" href="#">Central Online</a></li>
                    <li><a class="contato" href="#">Email</a></li>
                </ul>
            </li>
          
    </ul>
  </div>
  
  </body>
</html>