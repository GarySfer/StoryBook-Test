import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;

// Flavours
export const Flavours: Story = {
    render: () => (
      <div className="space-x-2">
        <Button label="Primary" variant="primary" size="md" />
        <Button label="Success" variant="success" size="md" />
        <Button label="Warning" variant="warning" size="md" />
        <Button label="Danger" variant="danger" size="md" />
        <Button label="Inverse" variant="inverse" size="md" />
        <Button label="Purple" variant="purple" size="md" />
      </div>
    ),
  };
  
  // Sizes
  export const Sizes: Story = {
    render: () => (
      <div className="space-x-2">
        <Button label="Small" variant="primary" size="sm" />
        <Button label="Medium" variant="primary" size="md" />
        <Button label="Large" variant="primary" size="lg" />
        <Button label="Extra Large" variant="primary" size="xl" />
      </div>
    ),
  };
  
  // Roundness
  export const Roundness: Story = {
    render: () => (
      <div className="space-x-2">
        <Button label="Square" variant="primary" size="md" className="rounded-none" />
        <Button label="Small" variant="primary" size="md" className="rounded-sm" />
        <Button label="Base" variant="primary" size="md" className="rounded" />
        <Button label="Medium" variant="primary" size="md" className="rounded-md" />
        <Button label="Large" variant="primary" size="md" className="rounded-lg" />
        <Button label="XL" variant="primary" size="md" className="rounded-xl" />
        <Button label="2XL" variant="primary" size="md" className="rounded-2xl" />
        <Button label="Circular" variant="primary" size="md" className="rounded-full" />
      </div>
    ),
  };
