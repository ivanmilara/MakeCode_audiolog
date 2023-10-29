basic.forever(function () {
    serial.writeValue("audio", input.soundLevel())
    if (input.soundLevel() > 128) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
        }
    }
})
