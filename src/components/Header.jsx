import React from 'react';

const Header = ({ user }) => {

    const upperUser = user.toUpperCase();
    return (
        <header>
            <h1>Bienvenido a Relatos de Papel - {upperUser}</h1>
        </header>
    );
};

export default Header;
