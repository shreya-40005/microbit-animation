input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.AB, function () {
    PacMan = images.createBigImage(`
        . # # # . . . . . .
        # # # . . . . . . .
        # # . . # . # . # .
        # # # . . . . . . .
        . # # # . . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        PacMan.scrollImage(1, 200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Bye!")
})
input.onGesture(Gesture.Shake, function () {
	
})
let PacMan: Image = null
basic.showIcon(IconNames.Happy)
