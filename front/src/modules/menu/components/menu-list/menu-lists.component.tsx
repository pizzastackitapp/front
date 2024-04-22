import React, {FC} from 'react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import {Pizza} from '@app/modules/menu/types/pizza';

interface MenuListProps {
    items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({items}) => {
    return (
        <div className='flex flex-wrap gap-10 justify-center'>
            {items.map(({image, ...pizza}) => (
                <MenuItem
                    key={pizza.id}
                    title={pizza.title}
                    weight={pizza.weight}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    imagePath={'/assets/pizza/' + image} 
                />
            ))}
        </div>
    );
};
