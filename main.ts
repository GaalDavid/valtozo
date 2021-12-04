let szám = 0
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.B, function () {
    while (2 == szám) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    }
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
    szám = randint(1, 2)
})
