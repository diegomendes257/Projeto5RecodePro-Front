import axios from "axios";

const EMPRESA_API_URL = 'http://localhost:8080/empresas';

class EmpresaService {
    getAllEmpresa(){
        return axios.get(EMPRESA_API_URL)
    }

    createEmpresa(empresa){
        return axios.post(EMPRESA_API_URL, empresa);
    }

    getEmpresaById(empresaId){
        return axios.get(EMPRESA_API_URL + '/' + empresaId);
    }

    updateEmpresa(empresaId, empresa){
        return axios.put(EMPRESA_API_URL + '/' + empresaId, empresa);
    }

    deleteEmpresa(empresaId){
        return axios.delete(EMPRESA_API_URL + '/' + empresaId);
    }
}

export default new EmpresaService();