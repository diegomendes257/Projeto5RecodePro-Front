import React from "react";

export default function footer(){
    return(
            <div className="footer">
                <div className="logo-footer">
                    <img src="../img/Logo.png" alt="Logo Três Carneiros Viagens"  title="Três Carneiros Viagens" />
                </div>
                <div className="textoFooter">
                    © 2022 Copyright - Todos os direitos reservados. Três Carneiros Viagens - RecodePRO
                </div>
                <div className="footer-redes">
                    <img src="../img/twitter.png" alt="" />
                    <img src="../img/instagram.png" alt="" />
                    <img src="../img/facebook.png" alt="" />
                    <img src="../img/linkedin.png" alt="" />
                </div>
            </div>
    );
}