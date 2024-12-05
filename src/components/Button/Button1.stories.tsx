import { Meta, StoryObj } from '@storybook/react';
import { Button1 } from './Button1';


const meta: Meta<typeof Button1> = {
  title: 'Components/Button1',
  component: Button1,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    roundness: {
        control: 'select',
        options: ['square', 'sm', 'base', 'md', 'lg', 'xl', '2xl', 'circular'],
    }
  },
};

export default meta;

type Story = StoryObj<typeof Button1>;

// Flavours
export const Flavours: Story = {
    render: () => (
      <div className="space-x-2">
        <Button1 label="Primary" variant="primary" size="md" />
        <Button1 label="Success" variant="success" size="md" />
        <Button1 label="Warning" variant="warning" size="md" />
        <Button1 label="Danger" variant="danger" size="md" />
        <Button1 label="Inverse" variant="inverse" size="md" />
        <Button1 label="Purple" variant="purple" size="md" />
      </div>
    ),
  };
  
  // Sizes
  export const Sizes: Story = {
    render: () => (
      <div className="space-x-2">
        <Button1 label="Small" variant="primary" size="sm" />
        <Button1 label="Medium" variant="primary" size="md" />
        <Button1 label="Large" variant="primary" size="lg" />
        <Button1 label="Extra Large" variant="primary" size="xl" />
      </div>
    ),
  };
  
  // Roundness
  export const Roundness: Story = {
    render: () => (
      <div className="space-x-2">
        <Button1 label="Square" variant="primary" size="md" className="rounded-none" />
        <Button1 label="Small" variant="primary" size="md" className="rounded-sm" />
        <Button1 label="Base" variant="primary" size="md" className="rounded" />
        <Button1 label="Medium" variant="primary" size="md" className="rounded-md" />
        <Button1 label="Large" variant="primary" size="md" className="rounded-lg" />
        <Button1 label="XL" variant="primary" size="md" className="rounded-xl" />
        <Button1 label="2XL" variant="primary" size="md" className="rounded-2xl" />
        <Button1 label="Circular" variant="primary" size="md" className="rounded-full" />
      </div>
    ),
  };
