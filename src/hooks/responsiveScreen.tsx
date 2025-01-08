import { useState, useEffect } from 'react';

export default function useResponsiveSlides() {
    const [slidePreview, setSlidePreview] = useState(1);

    const updateSlidesPerView = () => {
        if (window.innerWidth >= 1024) {
            setSlidePreview(3); 
        } else if (window.innerWidth >= 640) {
            setSlidePreview(2);
        } else {
            setSlidePreview(1); 
        }
    };

    useEffect(() => {
        updateSlidesPerView(); 
        window.addEventListener('resize', updateSlidesPerView);

        return () => window.removeEventListener('resize', updateSlidesPerView); 
    }, []);

    return slidePreview; 
}
