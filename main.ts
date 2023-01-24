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
    for (let index = 0; index < 4; index++) {
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
    }
})
let ball = 0
let PacMan = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.logoIsPressed()) {
        while (input.logoIsPressed()) {
            basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `,0)
        }
        basic.clearScreen()
    }
})
