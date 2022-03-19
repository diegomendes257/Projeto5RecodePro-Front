import React from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

export default function home(){
    return(
        <>
			<section class="secao">
				<div class="mensagemIndex">
					<p>VEM VIAJAR COM A GENTE!</p>
				</div>
				<div class="blocoIndexForm">
					<div class="mensagemForm">
						<p>Faça a viagem dos seus sonhos!</p>
					</div>
						<form class="formularioIndex">
							<input type="radio" class="radio" name="idaVolta" value="idaVolta" />
							<label>Ida e volta</label>
							<input type="radio" name="idaVolta" value="ida" />
							<label>Só ida</label><br /><br />
							<label>Escolha para onde ir:
								<select class="escolhaIda" name="ida">
									<option value="">Selecione uma região…</option>
									<option value="Nordeste">Nordeste</option>
									<option value="Sul">Sul</option>
									<option value="Sudeste">Sudeste</option>
								</select>
							</label>
							<label>Onde você está:
								<select class="escolhaOrigem" name="origem">
									<option value="">Selecione uma região…</option>
									<option value="Nordeste">Nordeste</option>
									<option value="Sul">Sul</option>
									<option value="Sudeste">Sudeste</option>
								</select>
							</label><br /><br />
							<label>Data de ida:</label>
							<input type="date" class="data" name="dataIda" />
							<label>Data de volta:</label>
							<input type="date" class="data" name="dataVolta" />
							<br /><br />
							<label>Passageiros:</label>
							<input type="number" class="qtdPassagem" name="qtdPassagem" />
							<label>Classe:
								<select class="escolhaClasse" name="origem">
									<option value="">Selecione a classe</option>
									<option value="basico">Básico</option>
									<option value="comodite">Comodite</option>
									<option value="executivo">Executivo</option>
								</select>
							</label><br /><br />
							<button>Consultar</button>
						</form>
					</div>
			</section>
			<Cards />
        </>
    );
}