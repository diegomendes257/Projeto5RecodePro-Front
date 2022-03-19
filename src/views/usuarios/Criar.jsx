import React, { useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UsuarioService from "../../Services/UsuarioService";


export default function Criar() {

    const [nome_cliente, setNome] = useState("");
    const [cpf_cliente, setCpf] = useState("");
    const [email_cliente, setEmail] = useState("");
    const [celular_cliente, setCelular] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarUsuario = (e) => {
        e.preventDefault();

        const usuario = {nome_cliente, cpf_cliente, email_cliente, celular_cliente};

        if(id){
            UsuarioService.updateUsuario(id, usuario)
            .then((response) => {
                navigate("/Usuarios")
            })
        }else{
            UsuarioService.createUsuario(usuario)
            .then((response) =>{
                navigate("/Usuarios")
            })
        }
    }

    useEffect(() =>{
        function getUsuarioById(){
            if(id){
                UsuarioService.getUsuarioById(id)
                .then((response) =>{
                    setNome(response.data.nome_cliente);
                    setCpf(response.data.cpf_cliente)
                    setNome(response.data.email_cliente);
                    setCpf(response.data.celular_cliente)
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
            <h2 className="text-center">{id ? "Editar" : "Crie uma conta"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input type="text" id="Nome" className="form-control" placeholder="Nome" value={nome_cliente}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">
              CPF
            </label>
            <input type="text" id="cpf" className="form-control" placeholder="cpf" value={cpf_cliente}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" id="email" className="form-control" placeholder="email" value={email_cliente}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="celular" className="form-label">
              Celular
            </label>
            <input type="text" id="celular" className="form-control" placeholder="celular" value={celular_cliente}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarUsuario(e)}>
            Criar
          </button>
          <Link
            to="/Usuarios"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}