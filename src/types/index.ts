import React from 'react';

// Card Component Types
export interface CardProps {
  image: string;
  title?: string;
  path?: string;
}

// Section Component Types
export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

// Carousel Component Types
export interface CarouselProps {
  images: string[];
  autoSlide?: boolean;
  interval?: number;
}

// HorizontalScroll Component Types
export interface HorizontalScrollProps {
  children: React.ReactNode;
}

// Navbar Types
export interface NavigationItem {
  path: string;
  label: string;
}

export interface NavLinkClassProps {
  isActive: boolean;
}
