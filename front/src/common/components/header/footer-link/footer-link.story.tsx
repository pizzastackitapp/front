import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { FooterLink } from './footer-link.component';

const meta: Meta<typeof FooterLink> = {
    title: 'Common/Footer link',
    component: FooterLink,
};
export default meta;

type Story = StoryFn<typeof FooterLink>;

export const Basic: Story = (args) => (
    <ul>
        <FooterLink {...args}/>
    </ul>
);
Basic.args = {
    href: "tel:+380441234567",
    children: "044 123 45 67",
}