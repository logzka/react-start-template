import React from 'react';
import './header.scss';

const Header = ({ children }: React.PropsWithChildren) => {
    return (
        <header className="header">
            <div className="header--inner">{children}</div>
        </header>
    );
};

export default Header;
