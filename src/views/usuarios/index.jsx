import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UsuarioService from "../../Services/UsuarioService";

export default function Index() {

    const [usuarios, setUsuarios] = useState([]);

    const getAllUsuarios = () => {
        UsuarioService.getAllUsuarios()
        .then((response) =>{
            setUsuarios(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllUsuarios();
    }, [])

    const deleteUsuario = (usuarioId) => {
        UsuarioService.deleteUsuario(usuarioId)
        .then((response) => {
            getAllUsuarios();
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
                <h1 className="container">Cadastro Usuario</h1>
            </div>
            <div className="container py-3">
                <Link to="/Criar">Criar Usuario</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) =>(
                            <tr key={usuario.id_cliente}>
                                <td>{usuario.nome_cliente}</td>
                                <td>{usuario.cpf_cliente}</td>
                                <td>{usuario.email_cliente}</td>
                                <td>{usuario.celular_cliente}</td>
                                <td className="d-flex">
                                    <Link to={`/Atualizar/${usuario.id_cliente}`} className="btn btn-info">Editar</Link>
                                    <button className="btn btn-danger" onClick={() => deleteUsuario(usuario.id_cliente)} style={{marginLeft: "10px"}}>Deletar</button>
                                </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}