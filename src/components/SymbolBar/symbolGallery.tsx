import React from 'react'

export type SymbolGalleryProps = {
  images: string[]
}

const SymbolGallery: React.FC<SymbolGalleryProps> = ({ images }) => {
  return (
    <div>
      <div className="flex justify-between">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="w-35 h-24 object-cover"
          />
        ))}
      </div>
    </div>
  )
}

export default SymbolGallery
