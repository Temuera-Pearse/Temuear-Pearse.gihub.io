import React from 'react'
import SymbolGallery from './symbolGallery'

const SymbolBar: React.FC = () => {
  const imageUrls = [
    '/symbols/kisspng-website-development-javascript-html5-css3-cascadin-appload-comprehensive-software-and-mobile-app-de-5b7b834e216377.0246733915348211981368.png',
    '/symbols/nodeLogo.png',
    '/symbols/reactLogo.png',
    '/symbols/jestLogo.png',
    '/symbols/reactQueryLogo.png',
    '/symbols/typescript.png',
    '/symbols/reduxLogo.png',
    '/symbols/insomniaLogo.png',
  ]

  return (
    <div>
      <SymbolGallery images={imageUrls} />
    </div>
  )
}

export default SymbolBar
