import React from "react";
import { Link } from "react-router-dom";
import Descricao from "../components/Descricao";

export default function contato(){
    return(
		<>
			<div class="boxPrincipalContato">

				<section class="secaoContato">
					<h1 class="nomeTextoContato">Contato</h1>
					<div class="fundo-contato">
							<h2>Entre em contato conosco pelos canais abaixo.</h2>
							<p>Telefone:<br />
							(81) 9 8888-9999<br />
							E-mail: trescarneirosviagens@recodepro.com <br />
							Site desenvolvido por: Diego Mendes da silva <br />
							Squad 5 - Diego Mendes, Verônica, Ryan, Mariana, Jessica.
							<Link to="/Sobre">SOBRE</Link>
							</p>
					</div>
				</section>
			</div>
		</>
    );
}