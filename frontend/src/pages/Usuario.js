import React from 'react';
import Title from '../components/Title/index';
import Cadastro from '../components/Cadastro/index';

export default function Usuario() {
    return (
        <div>
            <Title
                title={"Cadastro de usuario"} />
            <Cadastro />
        </div>
    )
}