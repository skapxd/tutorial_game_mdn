export const createCanvas = (app: Element) => {
    const canvas = document.createElement('canvas')
    canvas.width = 480
    canvas.height = 320
    app.appendChild(canvas)
}