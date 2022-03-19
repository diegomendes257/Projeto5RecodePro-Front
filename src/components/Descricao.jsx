import React from "react";
import { Link } from "react-router-dom";

export default function Descricao({nome, descricao}){

    return(
        <div className="descricao">
            <nav className="linkPagina">
                <p><Link to="/sobre">Home /{nome}</Link></p>
            </nav>
            <header>
                <h1>{nome}</h1>
            </header>
            <p>
                {descricao}</p>
        </div>
    );
}