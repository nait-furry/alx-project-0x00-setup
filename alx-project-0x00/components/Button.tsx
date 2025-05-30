

// File: components/Button.tsx

import React from 'react';
import { ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-xs',
  medium: 'px-4 py-2 text-sm',
  large: 'px-6 py-3 text-base'
};

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`px-4 py-2 text-white font-medium ${styles}`}>
      {title}
    </button>
  );
};

export default Button;




