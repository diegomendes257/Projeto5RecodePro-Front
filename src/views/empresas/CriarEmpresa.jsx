import React, { useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmpresaService from "../../Services/EmpresaService";


export default function CriarEmpresa() {

    const [nome_empresa, setNome_empresa] = useState("");
    const [cnpj_empresa, setCnpj_empresa] = useState("");
    const [placa_onibus, setPlaca_onibus] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarEmpresa = (e) => {
        e.preventDefault();

        const empresa = {nome_empresa, cnpj_empresa, placa_onibus};

        if(id){
            EmpresaService.updateEmpresa(id, empresa)
            .then((response) => {
                navigate("/Empresas")
            })
        }else{
            EmpresaService.createEmpresa(empresa)
            .then((response) =>{
                navigate("/Empresas")
            })
        }
    }

    useEffect(() =>{
        function getEmpresaById(){
            if(id){
                EmpresaService.getEmpresaById(id)
                .then((response) =>{
                  setNome_empresa(response.data.nome_empresa);
                  setCnpj_empresa(response.data.cnpj_empresa)
                  setPlaca_onibus(response.data.placa_onibus);
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
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="nome_empresa" className="form-label">
              Nome da empresa
            </label>
            <input type="text" id="nome_empresa" className="form-control" placeholder="Nome da empresa" value={nome_empresa}
              onChange={(e) => setNome_empresa(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cnpj_empresa" className="form-label">
              CNPJ da empresa
            </label>
            <input type="text" id="cnpj_empresa" className="form-control" placeholder="CNPJ da empresa" value={cnpj_empresa}
              onChange={(e) => setCnpj_empresa(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="placa_onibus" className="form-label">
              Placa do ônibus
            </label>
            <input type="text" id="placa_onibus" className="form-control" placeholder="Placa do ônibus" value={placa_onibus}
              onChange={(e) => setPlaca_onibus(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarEmpresa(e)}>
            Enviar
          </button>
          <Link
            to="/Empresas"
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