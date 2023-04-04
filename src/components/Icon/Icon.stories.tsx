import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Overview: Story = {
  args: {
    name: 'heart',
    size: 100
  }
};

export const ColorsAndComposition: Story = {
  render: () => (
    <div>
      <Icon size={64} name="facebook" style={{ color: '#4267B2' }} />
      <div
        style={{
          backgroundColor: 'black',
          borderRadius: 8,
          display: 'inline-block',
          position: 'relative'
        }}
      >
        <Icon name="tiktok" size={64} style={{ color: '#00f7ef' }} />
        <Icon
          name="tiktok"
          size={64}
          style={{
            color: '#ff004f',
            position: 'absolute',
            top: 4,
            left: 4,
            mixBlendMode: 'plus-lighter'
          }}
        />
      </div>
    </div>
  )
};

export const SVGManipulation: Story = {
  args: {
    name: 'eyeSlash',
    size: 100,
    block: true,
    svgProps: {
      stroke: '#ff0000',
      strokeWidth: 0.3,
      overflow: 'visible'
    }
  }
};

export const Illustrations: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Icon {...args} />
      <h3>Error 404: Not Found</h3>
      <div>The page you are looking for cannot be found.</div>
    </div>
  ),
  args: {
    name: 'rui-illustration:not-found',
    size: 200,
    block: true,
    svgProps: {
      stroke: '#bb0000',
      strokeWidth: 2
    }
  }
};
