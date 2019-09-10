export const isProduction = process.env.NODE_ENV === 'production'

console.log(`Production mode is currently ${isProduction}`)

export const defaultBGImage = "https://img3.goodfon.com/wallpaper/nbig/1/be/art-fantasy-forest-dragon-by.jpg"

export const reconnectionDelay = 2000

export const reconnectionAttempts = 5

export const endpoint = isProduction ? 'https://action-chance-backend.herokuapp.com/' : '10.9.109.40:3050'

export const debugLog = message => {
  if (isProduction) console.log(`%cDebug: ${message}`, 'color: blue')
}
