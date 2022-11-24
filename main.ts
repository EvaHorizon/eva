function macheEtwas () {
    led.plot(Position_x, 2)
    basic.pause(100)
    led.unplot(Position_x, 2)
    basic.pause(100)
    Position_x = Position_x + 1
}
input.onButtonPressed(Button.A, function () {
    Stein = !(Stein)
})
let Position_x = 0
let Stein = false
Stein = true
Position_x = 0
basic.forever(function () {
    if (Stein == true) {
        basic.clearScreen()
        macheEtwas()
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
    if (Position_x > 4) {
        Position_x = 0
    }
})
