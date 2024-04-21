import React from 'react';
import pizzaMenu from '@app/mocks/pizza.json';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';

export const MenuList = () => {
    return (
        <div className='flex flex-wrap gap-10'>
            {pizzaMenu.map((pizza) => (
                <MenuItem
                    key={pizza.id}
                    title={pizza.title}
                    weight={pizza.weight}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    imagePath={'/assets/pizza/' + pizza.image}
                />
            ))}
        </div>
    );
};
