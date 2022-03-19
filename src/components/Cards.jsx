import React from "react";

export default function Cards(){
    return(
        <section class="secaoCards">
				<div class="textoCimaCard">
					<p>VIAJE PARA LUGARES MARAVILHOSOS COM PREÇOS INCRÍVEIS!</p>
					<hr class="hr" />
				</div>
				<div class="boxCard">
					<div class="card">
						<div class="imgCard">
							<figure>
								<img src="../img/floripa.jpg" alt="Florianópolis/SC"  title="Florianópolis" />
							</figure>
						</div>
						<div class="nomeViagemCard">
							<b>Salvador X Florianópolis - Noite</b>
						</div>
						<div class="descricaoCard">
							<p>Valor: R$ 550,00</p>
							<p>Classe: Comoditte</p>
						</div>
					</div>
					<div class="card">
						<div class="imgCard">
							<figure>
								<img src="../img/riodeJaneiro.jpg" alt="Rio de Janeiro/RJ"  title="Rio de Janeiro" />
							</figure>
						</div>
						<div class="nomeViagemCard">
							<b>Fortaleza X Rio de Janeiro - Tarde</b>
						</div>
						<div class="descricaoCard">
							<p>Valor: R$ 380,00</p>
							<p>Classe: Comoditte</p>
						</div>
					</div>
					<div class="card">
						<div class="imgCard">
							<figure>
								<img src="../img/recife.jpg" alt="Recife"  title="Recife/PE" />
							</figure>
						</div>
						<div class="nomeViagemCard">
							<b>Minas Gerais X Recife - Manhã</b>
						</div>
						<div class="descricaoCard">
							<p>Valor: R$ 450,00</p>
							<p>Classe: Básico</p>
						</div>
					</div>
					<div class="card">
						<div class="imgCard">
							<figure>
								<img src="../img/salvador.jpg" alt="Salvador"  title="Salvador/BH" />
							</figure>
						</div>
						<div class="nomeViagemCard">
							<b>São Paulo X Salvador - Noite</b>
						</div>
						<div class="descricaoCard">
							<p>Valor: R$ 600,00</p>
							<p>Classe: Executivo</p>
						</div>
					</div>
					<div class="card">
						<div class="imgCard">
							<figure>
								<img src="../img/saoPaulo.jpg" alt="São Paulo"  title="São Paulo/SP" />
							</figure>
						</div>
						<div class="nomeViagemCard">
							<b>Amazonas X São Paulo - Tarde</b>
						</div>
						<div class="descricaoCard">
							<p>Valor: R$ 750,00</p>
							<p>Classe: Executivo</p>
						</div>
					</div>
					<div class="card">
						<div class="imgCard">
							<figure>
								<img src="../img/parana.jpg" alt="Foz do Iguaçu"  title="Foz do Iguaçú/PR" />
							</figure>
						</div>
						<div class="nomeViagemCard">
							<b>Piauí X Paraná - Tarde</b>
						</div>
						<div class="descricaoCard">
							<p>Valor: R$ 460,00</p>
							<p>Classe: Comoditte</p>
						</div>
					</div>
				</div>
			</section>
    );
}