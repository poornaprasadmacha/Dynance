import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  alt?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-4 h-4',
  alt = 'WhatsApp'
}) => {
  return (
    <img
      src="/images/whatsapp-icon.png"
      alt={alt}
      className={`inline-block object-contain flex-shrink-0 select-none ${className}`}
      loading="lazy"
    />
  );
};
