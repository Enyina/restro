"use client";
import React, { useState, useEffect } from 'react';

interface MyComponentProps {
    children: React.ReactNode;
  }

const ScrollableContent: React.FC<MyComponentProps>= ({ children }) => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let hoverTimeout: NodeJS.Timeout;

        const handleHoverStart = () => {
            setIsScrolling(true);
            hoverTimeout = setTimeout(startScrollAnimation, 1000); // Start animation after 1 second of hovering
        };

        const handleHoverEnd = () => {
            setIsScrolling(false);
            clearTimeout(hoverTimeout); // Clear timeout if hover ends before animation starts
        };

        const startScrollAnimation = () => {
            const div = document.querySelector('.scrollable-content');
            if (div) {
                div.scrollBy({ left: 50, behavior: 'smooth' }); // Scroll 50px forward
                setTimeout(() => div.scrollBy({ left: -50, behavior: 'smooth' }), 200); // Scroll 50px back after 200ms
            }
        };

        const scrollableContent = document.querySelector('.scrollable-content');
        if (scrollableContent) {
            scrollableContent.addEventListener('mouseenter', handleHoverStart);
            scrollableContent.addEventListener('mouseleave', handleHoverEnd);
        }

        return () => {
            if (scrollableContent) {
                scrollableContent.removeEventListener('mouseenter', handleHoverStart);
                scrollableContent.removeEventListener('mouseleave', handleHoverEnd);
            }
        };
    }, []);

  return (
    <div className="gap-6 flex flex-shrink-0 w-full overflow-x-scroll overflow-hidden scroll-smooth scrollable-content">
      {children}
    </div>
  );
};

export default ScrollableContent;
