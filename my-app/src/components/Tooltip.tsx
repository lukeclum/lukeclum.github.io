import React, { useState, ReactNode } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = 'top',
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleTooltip = (visible: boolean) => {
    setIsVisible(visible);
  };

  const positionClasses: Record<string, string> = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-1',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-1',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-1',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-1',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => toggleTooltip(true)}
      onMouseLeave={() => toggleTooltip(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 
                      ${positionClasses[position]} z-10`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
