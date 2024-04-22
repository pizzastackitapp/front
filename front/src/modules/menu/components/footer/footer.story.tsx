import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './footer.component';

const meta: Meta<typeof Footer> = {
    title: 'Menu/Footer',
    component: Footer,
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Basic: Story = {};

// export const Primary: Story = {
//     args: {
//         primary: true,
//     },
// };