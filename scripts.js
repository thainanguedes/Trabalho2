

	let cadastro = localStorage.getItem("cadastro_db");// Recupera os dados armazenados

	 cadastro = JSON.parse(cadastro); // Converte string para objeto

	if(cadastro == null) // Caso não haja conteúdo, inicia um vetor vazio
	cadastro = [];


	
	const Listar = ()=>{

		$("#tabela").html("");
		$("#tabela").html(
			"<thead>"+
			"	<tr>"+	
			"	<th>AÇÕES</th>"+
			"	<th>NOME</th>"+
			"	<th>EMAIL</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		 for(let i in cadastro){
			const cli = JSON.parse(cadastro[i]);
			  	$("#tabela tbody").append("<tr>"+
										  "	<td><img src='img/delete.png' alt='"+i+"' class='btnExcluir'/></td>" + 
										 "	<td>"+cli.nome+"</td>" + 
										 "	<td>"+cli.email+"</td>" + 
		  								 "</tr>");
										 
		 }
	}



	Listar();




	const btn = document.getElementById('btn');

	btn.addEventListener('click',()=>{

	let nome  = document.getElementById('nome').value;	
	let email  = document.getElementById('email').value;

	let cli = GetCliente("Codigo", "");

	const cliente = JSON.stringify({

		nome    : nome,
		email    : email


	});

	cadastro.push(cliente);

	localStorage.setItem("cadastro_db", JSON.stringify(cadastro));

	Listar();

	});




	
	const GetCliente = (propriedade, valor)=>{
		let cli = null;
        for (let item in cadastro) {
            const i = JSON.parse(cadastro[item]);
            if (i[propriedade] == valor)
                cli = i;
        }
        return cli;
	}






	const Excluir = ()=>{
		cadastro.splice(indice_selecionado, 1);
		localStorage.setItem("cadastro_db", JSON.stringify(cadastro));
		alert("Registro excluído.");
		return true;
	}



	$("#tabela").on("click", ".btnExcluir", ()=>{
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
	});

	