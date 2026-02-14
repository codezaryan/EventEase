import React from 'react';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
      {children}
    </div>
  );
};

export default HorizontalScroll;
