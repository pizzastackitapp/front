import React, {FC, PropsWithChildren} from 'react';

interface FooterLinkProps {
    href: string;
}

export const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({ href, children }) => {
    return (
        <li>
            <a href={href}
                className="text-sm font-bold text-gray-400 hover:text-gray-300 hover:underline"
                >
                {children}
            </a>
        </li>
    );
};