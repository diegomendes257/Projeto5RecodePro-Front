import axios from "axios";

const USUARIO_API_URL = 'http://localhost:8080/usuarios';

class UsuarioService {
    getAllUsuarios(){
        return axios.get(USUARIO_API_URL)
    }

    createUsuario(usuario){
        return axios.post(USUARIO_API_URL, usuario);
    }

    getUsuarioById(usuarioId){
        return axios.get(USUARIO_API_URL + '/' + usuarioId);
    }

    updateUsuario(usuarioId, usuario){
        return axios.put(USUARIO_API_URL + '/' + usuarioId, usuario);
    }

    deleteUsuario(usuarioId){
        return axios.delete(USUARIO_API_URL + '/' + usuarioId);
    }
}

export default new UsuarioService();