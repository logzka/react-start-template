import React, { FC, PropsWithChildren } from 'react';
import './layout.scss';

const Layout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div className="layout">
      <div className="layout--inner">{children}</div>
    </div>
  );
};

export default Layout;
