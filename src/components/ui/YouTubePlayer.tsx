'use client';

import React, { useEffect, useRef, useState } from 'react';

interface YouTubePlayerProps {
    videoId: string;
    title?: string;
    className?: string;
    iframeId?: string;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
                                                                videoId,
                                                                title = 'YouTube Video',
                                                                className = '',
                                                                iframeId = 'ytframe0',
                                                            }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setIsLoading(false);
        const iframe = iframeRef.current;

        if (iframe && videoId) {
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

            iframe.addEventListener('load', handleLoad);
            return () => {
                iframe.removeEventListener('load', handleLoad);
            };
        }
    }, [videoId]);

    return (
        <div className={`relative rounded-md h-[180px] md:h-[220px] lg:h-[210px] w-full bg-black ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                </div>
            )}
            <iframe
                ref={iframeRef}
                id={iframeId}
                title={title}
                className="w-full h-full rounded-md"
                src=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};
