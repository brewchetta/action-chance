export const defaultBGImage = "https://img3.goodfon.com/wallpaper/nbig/1/be/art-fantasy-forest-dragon-by.jpg"

export const reconnectionDelay = 2000

export const reconnectionAttempts = 5

// export const endpoint = '10.9.110.165:3050'
export const endpoint = 'https://action-chance-backend.herokuapp.com/'

export const debugLog = message => {
  if (process.env.NODE_ENV !== 'production') console.log(`%cDebug: ${message}`, 'color: blue')
}
