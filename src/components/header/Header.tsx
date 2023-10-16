import React from 'react';
import './header.scss';
import { IHeaderProps } from './header.types';

const Header = ({ className = '', children }: React.PropsWithChildren<IHeaderProps>) => {
    return (
        <header className={`header ${className}`}>
            <div className="header--inner">{children}</div>
        </header>
    );
};

export default Header;
