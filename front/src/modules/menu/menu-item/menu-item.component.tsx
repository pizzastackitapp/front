
import React, { FC } from 'react';

interface MenuItemsProp {
    imagePath: string;
    title: string;
    weight: number;
    ingredients: string;
    price: number;
}



export const MenuItem: FC<MenuItemsProp> = ({ imagePath, title, weight, ingredients, price }) => {
    return (
        <div className="w-96 shadow-xl rounded-2xl bg-white">
            <div className="relative mb-8">
                <img
                className="object-cover object-center w-full h-[15rem] rounded-t-2xl"
                src={imagePath} 
                alt="pizza manhattan" />
                <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
                    {weight} г
                </span>
            </div>
            <div className='p-8'>
                <h2 className='text-xl font-semibold mb-2'>{title}</h2>
                <p>
                    {ingredients}
                </p>
                <span className='text-xl font-semibold'>
                    {price} грн
                </span>
            </div>
        </div>
    );
};  