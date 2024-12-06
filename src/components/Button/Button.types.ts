import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { buttonStyles } from './Button';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  label: string;
}
