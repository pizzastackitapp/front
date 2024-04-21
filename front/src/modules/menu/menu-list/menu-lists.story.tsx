
import type { Meta, StoryObj } from '@storybook/react';
import {MenuList} from './menu-lists.component'

// Опишіть метадані для вашої історії
const meta: Meta = {
    title: 'Menu/MenuList',
    component: MenuList,
};

export default meta;

// Опишіть тип історії
type StoryType = StoryObj<typeof MenuList>;

// Опишіть ваші історії
export const View: StoryType = (args: any) => <MenuList {...args} />;
View.args = {

};
