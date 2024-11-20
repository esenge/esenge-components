import React from 'react';
import Button, { I_ButtonProps } from './index';
import { Meta, StoryFn } from '@storybook/react';
import {BUTTON_SIZE, BUTTON_TYPE} from './types';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: StoryFn<I_ButtonProps> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
    label: 'Primary button',
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    disabled: false,
    label: 'Secondary button',
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.SECONDARY,
};

export const Warning = Template.bind({});
Warning.args = {
    disabled: false,
    label: 'Warning button',
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.WARNING,
};

export const Error = Template.bind({});
Error.args = {
    disabled: false,
    label: 'Error button',
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.ERROR,
};

export const Neutral = Template.bind({});
Neutral.args = {
    disabled: false,
    label: 'Neutral button',
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.NEUTRAL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled button',
    disabled: true,
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.PRIMARY,
};
