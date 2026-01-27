import React from 'react';

const VideoSkeleton: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default VideoSkeleton;