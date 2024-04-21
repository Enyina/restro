import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    "theme_color": "#FF7F44",
    "background_color": "#F8F7F7",
    "icons": [
      {
        "purpose": "maskable",
        "sizes": "512x512",
        "src": "/public/icon512_maskable.png",
        "type": "image/png"
      },
      {
        "purpose": "any",
        "sizes": "512x512",
        "src": "/public/icon512_rounded.png",
        "type": "image/png"
      }
    ],
    "orientation": "any",
    "display": "standalone",
    "dir": "auto",
    "lang": "en-US",
    "name": "Restro Shop",
    "short_name": "Restro"
  }
  
}