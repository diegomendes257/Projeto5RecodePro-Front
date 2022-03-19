import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PassagemService from "../../Services/PassagemService";

export default function IndexPassagem() {

    const [passagens, setPassagens] = useState([]);

    const getAllPassagens = () => {
        PassagemService.getAllPassagens()
        .then((response) =>{
            setPassagens(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllPassagens();
    }, [])

    const deletePassagem = (passagemId) => {
        PassagemService.deletePassagem(passagemId)
        .then((response) => {
            getAllPassagens();
        })
        .catch((error) => {
            console.log(error);
            const {data} = error.response;
            if (data.status === 500){
                alert("Erro na API");
            }
        });
    };
    
    
    return(
        <>
            <div className="header">
                <h1 className="container">Passagens Cadastradas</h1>
            </div>
            <div className="container py-3">
                <Link to="/CriarPassagem">Comprar Passagem</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Hora</th>
                            <th>Tarifa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passagens.map((passagem) =>(
                            <tr key={passagem.id}>
                                <td>{passagem.origem}</td>
                                <td>{passagem.destino}</td>
                                <td>{passagem.hora}</td>
                                <td>{passagem.tarifa}</td>
                                <td className="d-flex">
                                    <Link to={`/CriarPassagem/${passagem.id}`} className="btn btn-info">Editar</Link>
                                    <button className="btn btn-danger" onClick={() => deletePassagem(passagem.id)} style={{marginLeft: "10px"}}>Deletar</button>
                                </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}