import React from 'react';
import Button from './index';
import { Meta, StoryFn } from '@storybook/react';

// Define the props for the Button component
interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
    },
} as Meta;

// Template function with the correct typing
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Click me',
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    className: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    className: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
    label: 'Large Button',
    className: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Button',
    className: 'disabled',
    disabled: true,
};
