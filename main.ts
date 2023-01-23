input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.AB, function () {
    PacMan = 0
    for (let index = 0; index < 4; index++) {
        images.createBigImage(`
            . . . . . . # # # .
            . . . . . . . # # #
            . # . # . # . . # #
            . . . . . . . # # #
            . . . . . . # # # .
            `).scrollImage(1, 200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Bye!")
})
input.onGesture(Gesture.Shake, function () {
    ball = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
})
let ball = 0
let PacMan = 0
basic.showIcon(IconNames.Happy)
