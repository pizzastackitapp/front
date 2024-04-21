
import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';

// Опишіть метадані для вашої історії
const meta: Meta = {
    title: 'Menu/MenuItem',
    component: MenuItem,
};

export default meta;

// Опишіть тип історії
type StoryType = StoryObj<typeof MenuItem>;

// Опишіть ваші історії
export const View: StoryType = (args: any) => <MenuItem {...args} />;
View.args = {
    imagePath: '/assets/pizza/manhattan.jpeg',
    weight: 555,
    title: 'Піцца Мангеттен',
    ingredients: '(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
    price: 215,
};
