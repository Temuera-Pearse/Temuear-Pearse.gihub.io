import React from 'react'

export type SymbolGalleryProps = {
  images: string[]
}

const SymbolGallery: React.FC<SymbolGalleryProps> = ({ images }) => {
  return (
    <div>
      <div className="container flex justify-center">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="flex w-24 h-24 p-24"
          />
        ))}
      </div>
    </div>
  )
}

export default SymbolGallery
