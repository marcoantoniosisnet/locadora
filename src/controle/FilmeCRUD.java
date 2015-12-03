package controle;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dominio.Categoria;
import dominio.Filme;
import servico.FilmeServico;
import servico.CategoriaServico;
import servico.ServicoException;
import servico.ServicoFactory;

@WebServlet("/cliente/FilmeCRUD")
public class FilmeCRUD extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
	private static String INSERIR_OU_ALTERAR = "/cliente/filmeForm.jsp";
	private static String LISTAR = "/cliente/filmeListar.jsp";
	private static String ESCOLHER_CATEGORIA = "/cliente/filmeEscolherCategoria.jsp";
	private static String ERRO = "/publico/erro.jsp";

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		
		FilmeServico filmeServico = ServicoFactory.criarFilmeServico();
		CategoriaServico categoriaServico = ServicoFactory.criarCategoriaServico();
		
		String forward = "";
		String cmd = request.getParameter("cmd");
		
		if (cmd == null || cmd.equalsIgnoreCase(""))
			cmd = "listar";
		
		if (cmd.equalsIgnoreCase("deletar")) {
			int cod = Integer.parseInt(request.getParameter("cod"));
			try {
				Filme fil = filmeServico.buscaPorCodigo(cod);
				if (fil != null) {
					filmeServico.excluir(fil);
				}
				request.setAttribute("lista", filmeServico.buscarTodos());
				forward = LISTAR;
			} catch (RuntimeException e) {
				request.setAttribute("erro",
						"Erro de execução: " + e.getMessage());
				forward = ERRO;
			}
			
		} else if (cmd.equalsIgnoreCase("editar")) {
			int cod = Integer.parseInt(request.getParameter("cod"));
			try {
				Filme fil = filmeServico.buscaPorCodigo(cod);
				if (fil != null) {
					request.setAttribute("fil", fil);
					forward = INSERIR_OU_ALTERAR;
				} else {
					request.setAttribute("lista", filmeServico.buscarTodos());
					forward = LISTAR;
				}
			} catch (RuntimeException e) {
				request.setAttribute("Erro de execução: ", e.getMessage());
				forward = ERRO;
			}
		} else if (cmd.equalsIgnoreCase("escolherCategoria")) {
			try {
				request.setAttribute("lista", categoriaServico.buscarTodos());
				forward = ESCOLHER_CATEGORIA;
			} catch (RuntimeException e) {
				request.setAttribute("Erro de execução: ", e.getMessage());
				forward = ERRO;
			}
			//LISTAR OS FILMES
		} else if (cmd.equalsIgnoreCase("listar")) {
			try {
				request.setAttribute("lista", filmeServico.buscarTodos());
				forward = LISTAR;
			} catch (RuntimeException e) {
				request.setAttribute("erro",
						"Erro de execução: " + e.getMessage());
				forward = ERRO;
			}
			
			
		} else if (cmd.equalsIgnoreCase("novo")) {
			int codCategoria = Integer.parseInt(request
					.getParameter("codCategoria"));
			try {
				Filme fil = new Filme();
				fil.setCategoria(categoriaServico.buscaPorCodigo(codCategoria));
				request.setAttribute("fil", fil);
				forward = INSERIR_OU_ALTERAR;
			} catch (RuntimeException e) {
				request.setAttribute("erro",
						"Erro de execução: " + e.getMessage());
				forward = ERRO;
			}
		}
		RequestDispatcher rd = request.getRequestDispatcher(forward);
		rd.forward(request, response);
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		FilmeServico filmeServico = ServicoFactory.criarFilmeServico();
		String forward = "";
		try {
			Filme fil = instanciar(request);
			filmeServico.inserirAtualizar(fil);
			request.setAttribute("lista", filmeServico.buscarTodos());
			forward = LISTAR;
		} catch (ServicoException e) {
			request.setAttribute("erro", e.getMessage());
			forward = ERRO;
		}
		RequestDispatcher rd = request.getRequestDispatcher(forward);
		rd.forward(request, response);
	}

	private Filme instanciar(HttpServletRequest req) {
		
		CategoriaServico categoriaServico = ServicoFactory.criarCategoriaServico();
		String aux;
		
		Filme x = new Filme();
		aux = req.getParameter("codFilme");
		if (aux != null && !aux.isEmpty())
			x.setCodFilme(Integer.parseInt(aux));
		aux = req.getParameter("titulo");
		x.setTitulo(aux);
		aux = req.getParameter("ano");
		x.setAno(Integer.parseInt(aux));
		aux = req.getParameter("quantidadeMidia");
		x.setQuantidadeMidia(Integer.parseInt(aux));
		
		aux = req.getParameter("codCategoria");
		x.setCategoria(categoriaServico.buscaPorCodigo(Integer.parseInt(aux)));
		return x;
	}
}
