import React, { useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PassagemService from "../../Services/PassagemService";

export default function CriarPassagem() {

    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");
    const [hora, setHora] = useState("");
    const [tarifa, setTarifa] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarPassagem = (e) => {
        e.preventDefault();

        const passagem = {origem, destino, hora, tarifa};

        if(id){
            PassagemService.updatePassagem(id, passagem)
            .then((response) => {
                navigate("/indexPassagem")
            })
        }else{
            PassagemService.createPassagem(passagem)
            .then((response) =>{
                navigate("/CriarPassagem")
            })
        }
    }

    useEffect(() =>{
        function getPassagemById(){
            if(id){
                PassagemService.getPassagemById(id)
                .then((response) =>{
                    setOrigem(response.data.origem);
                    setDestino(response.data.destino)
                    setHora(response.data.hora);
                    setTarifa(response.data.tarifa)
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        }
    }, [id]);

    return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Comprar uma passagem"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Origem" className="form-label">
              Origem
            </label>
            <input type="text" id="Origem" className="form-control" placeholder="Origem" value={origem}
              onChange={(e) => setOrigem(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="destino" className="form-label">
              Destino
            </label>
            <input type="text" id="destino" className="form-control" placeholder="destino" value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="hora" className="form-label">
              Hora
            </label>
            <input type="text" id="hora" className="form-control" placeholder="hora" value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tarifa" className="form-label">
              Tarifa
            </label>
            <input type="text" id="tarifa" className="form-control" placeholder="tarifa" value={tarifa}
              onChange={(e) => setTarifa(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarPassagem(e)}>
            Comprar passagem
          </button>
          <Link
            to="/indexPassagem"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar compra
          </Link>
        </fieldset>
      </form>
    </div>
  );
}