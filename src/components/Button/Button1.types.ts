import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { buttonStyles } from './Button1';

export interface Button1Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  label: string;
}
