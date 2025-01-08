import { useState, useEffect } from 'react';

export default function useResponsiveSlides() {
    const [slidePreview, setSlidePreview] = useState(1);

    const updateSlidesPerView = () => {
        if (window.innerWidth >= 1024) {
            setSlidePreview(3); // Large screens
        } else if (window.innerWidth >= 640) {
            setSlidePreview(2); // Medium screens
        } else {
            setSlidePreview(1); // Small screens
        }
    };

    useEffect(() => {
        updateSlidesPerView(); // Set initial value
        window.addEventListener('resize', updateSlidesPerView); // Update on resize

        return () => window.removeEventListener('resize', updateSlidesPerView); // Cleanup
    }, []);

    return slidePreview; // Return the current slides per view
}
