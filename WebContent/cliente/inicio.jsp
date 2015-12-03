<%@page import="java.util.List"%>
<%@page import="dominio.Filme"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>** Locadora **</title>

<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/resources/css/estilo.css" />
	
	<script src="resources/jQuery/jquery-latest.js"></script>
	<script src="resources/jQuery/jquery.js" type="text/javascript"></script>
	<script src="resources/jQuery/jquery.cycle2.min.js" type="text/javascript"></script>
</head>

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
		
			<h1>Catalogo dos Filmes</h1>

		     
		   <table border=1 >
		<thead>
				<tr>
					
					
					<th>Filme</th>
					<th>Filme</th>
					<th>Filme</th>
								
				</tr>
		</thead>
		
		<tbody>
			<c:forEach items="${lista}" var="x">
				
									
				<tr>

					<td><img src="/resources/imgVid/vd1.jpg" height="140px" width="100px" /></td>
					
					<td><img src="/resources/imgVid/vd2.jpg" height="140px" width="100px" /></td>
					
					<td><img src="/resources/imgVid/vd6.jpg" height="140px" width="100px" /></td>
					
					


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