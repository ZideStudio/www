'use client';

type ClickableImageProps = {
  src: string;
  alt?: string;
  onImageClick: (src: string, alt?: string) => void;
};

export const ClickableImage = ({ src, alt, onImageClick }: ClickableImageProps) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img src={src} alt={alt} className="cursor-pointer rounded-xl transition-opacity duration-200 hover:opacity-80" onClick={() => onImageClick(src, alt)} />
      {alt && <p className="text-text/50 text-sm">{alt}</p>}
    </div>
  );
};
