import React from 'react';
import { Meta, Story } from '@storybook/react';
import TxDescription from '../src/components/TxDescription';

const meta: Meta = {
  title: 'TxDescription',
  component: TxDescription,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const CONFIG = {
  name: 'testnet',
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12',
};

const Template: Story = () => (
  <TxDescription
    network={CONFIG}
  >{`Send 1234567uluna to terra1fs6c6y65c65kkjanjwvmnrfvnm2s58ph88t9ky`}</TxDescription>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
