import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import EmpresaService from "../../Services/EmpresaService"; 

export default function IndexEmpresa() {

    const [empresas, setEmpresas] = useState([]);

    const getAllEmpresas = () => {
        EmpresaService.getAllEmpresas()
        .then((response) =>{
            setEmpresas(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllEmpresas();
    }, []);

    const deleteEmpresa = (empresaId) => {
        EmpresaService.deleteEmpresa(empresaId)
        .then((response) => {
            getAllEmpresas();
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
            <header className="header">
                <h1 className="container">Cadastre sua Empresa</h1>
            </header>
            <div className="container py-3">
                <Link to="/CriarEmpresa" className="btn btn-primary mb-2">Cadastrar Empresa</Link>
                    <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CNPJ</th>
                                <th>Placa do Ônibus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empresas.map((empresa) =>(
                                <tr key={empresa.id_empresa}>
                                    <td>{empresa.nome_empresa}</td>
                                    <td>{empresa.cnpj_empresa}</td>
                                    <td>{empresa.placa_onibus}</td>
                                    <td className="d-flex">
                                        <Link to={`/AtualizarEmpresa/${empresa.id_empresa}`} 
                                        className="btn btn-info">Editar</Link>
                                        <button className="btn btn-danger" onClick={() => deleteEmpresa(empresa.id_empresa)} style={{marginLeft: "10px"}}>Deletar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}