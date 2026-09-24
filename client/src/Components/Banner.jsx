import { TruckIcon, XIcon, ZapIcon } from 'lucide-react';
import React, { useState } from 'react';

const Banner = () => {
  const [bannerVisible, setbannerVisible] = useState(() => {
    return sessionStorage.getItem('banner_dismissed') !== 'true';
  });

  const dismissBanner = () => {
    setbannerVisible(false);
    sessionStorage.setItem('banner_dismissed', 'true');
  };

  const bannerItem = (
    <div className="flex items-center gap-12 shrink-0 pr-12">
      <div className="flex items-center gap-2">
        <TruckIcon className="size-4 shrink-0" />
        <span>Free Insured Delivery on orders over $800!</span>
      </div>
      <div className="flex items-center gap-2">
        <ZapIcon className="size-3.5 fill-yellow-500 text-yellow-500" />
        <span className="text-white/90">100% Certified Authentic Gemstones</span>
      </div>
    </div>
  );

  return (
    <div>
      {bannerVisible && (
        <div className="bg-gradient-to-r from-app-green via-emerald-800 to-app-green text-white text-sm relative overflow-hidden py-2">
          <div className="flex animate-marquee whitespace-nowrap">
            {bannerItem}
            {bannerItem}
            {bannerItem}
            {bannerItem}
          </div>
          <button
            onClick={dismissBanner}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-app-green/90 hover:bg-white/20 rounded-full transition-colors z-10 cursor-pointer shadow-md"
            aria-label="Dismiss Banner"
          >
            <XIcon className="size-4 shrink-0" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner