import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BuyUSTModal } from '../src/components/modals/BuyUSTModal';

const meta: Meta = {
  title: 'BuyUSTModal',
  component: BuyUSTModal,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template: Story = () => <BuyUSTModal />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
