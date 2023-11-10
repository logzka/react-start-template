import React from 'react';
import './logo.scss';
import LogoSvg from '../../assets/logo.svg';
import LogoInvertedSvg from '../../assets/logo-inverted.svg';

interface ILogoProps {
  size?: TLogoSize;
  type?: TLogoType;
}

type TLogoSize = 'small' | 'medium' | 'large';
type TLogoType = 'default' | 'inverted';

const Logo = ({ size = 'small', type = 'default' }: ILogoProps) => {
  return (
    <div className="logo">
      <div className="logo--inner">
        {type === 'inverted' ? (
          <img className={`logo--inner__img logo--inner__img-${size}`} src={LogoInvertedSvg} alt="logo" />
        ) : (
          <img className={`logo--inner__img logo--inner__img-${size}`} src={LogoSvg} alt="logo" />
        )}
      </div>
    </div>
  );
};

export default Logo;
