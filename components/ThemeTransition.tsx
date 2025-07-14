
'use client';

import React, { useEffect } from 'react';

interface ThemeTransitionProps {
    mode: 'toDark' | 'toLight';
    onComplete: () => void;
}

const Star: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="star" style={style}></div>
);

export const ThemeTransition: React.FC<ThemeTransitionProps> = ({ mode, onComplete }) => {
    const isToDark = mode === 'toDark';

    useEffect(() => {
        // Use a reliable timer to signal completion. This duration must match the CSS animation duration.
        const timer = setTimeout(onComplete, 1500);

        // Cleanup timer on unmount to prevent memory leaks.
        return () => clearTimeout(timer);
        
    // An empty dependency array ensures this effect runs only once when the component mounts.
    // This makes the timer robust and prevents it from being reset by parent re-renders.
    }, []);


    // Generate random stars for the nightfall animation
    const stars = isToDark ? Array.from({ length: 50 }).map((_, i) => {
        const size = Math.random() * 2 + 1;
        return {
            key: i,
            style: {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${Math.random() * 1.5}s`,
            },
        };
    }) : [];

    return (
        <div
            className={`theme-transition-overlay ${isToDark ? 'nightfall' : 'sunrise'}`}
        >
            {isToDark ? (
                <>
                    <div className="moon"></div>
                    {stars.map(star => <Star key={star.key} style={star.style} />)}
                </>
            ) : (
                <div className="sun"></div>
            )}
        </div>
    );
};
