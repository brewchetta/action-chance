export const isProduction = process.env.NODE_ENV === 'production'

export const defaultBGImage = "https://img3.goodfon.com/wallpaper/nbig/1/be/art-fantasy-forest-dragon-by.jpg"

export const defaultImgURL =
  "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg";

export const reconnectionDelay = 2000

export const reconnectionAttempts = 5

export const endpoint = isProduction ? 'https://action-chance-backend.herokuapp.com/' : '192.168.0.15:3050/'

export const debugLog = message => {
  if (!isProduction && window.innerHeight > 600) console.log(`%cDebug: ${message}`, 'color: blue')
  if (!isProduction && window.innerHeight <= 600) alert(`Debug: ${message}`, 'color: blue')
}

debugLog(`Production mode is currently ${isProduction}`)
