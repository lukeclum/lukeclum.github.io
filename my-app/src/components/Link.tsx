import React, { AnchorHTMLAttributes, FC } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  text?: string;
  className?: string;
}

const Link: FC<LinkProps> = ({
  href = '#',
  text = 'Click here',
  className = '',
  ...props
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`text-sm text-gray-400 w-fit relative 
                before:absolute before:inset-x-0 before:h-0.5 
                before:bg-blue-700 before:bottom-0 before:scale-x-0 
                before:origin-left hover:before:scale-x-100 
                before:transition-all ${className}`}
    {...props}
  >
    {text}
  </a>
);

export default Link;