import React from 'react';

/** Styles */
import './switch.scss';

/** Types */
import { ISwitchProps } from './types';

const Switch = ({ onChange }: ISwitchProps) => {
  return (
    <div>
      {/* Rounded switch */}
      <label className="switch">
        <input type="checkbox" onChange={(e) => onChange(e)} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
