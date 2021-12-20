function led2 (y: number, speed: number) {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (b % 4 == 0) {
                for (let index = 0; index <= 4; index++) {
                    if (list[y][index] == 1) {
                        led.plot(index, y)
                    } else {
                        led.unplot(index, y)
                    }
                }
            } else if (b % 4 == 1) {
                if (list[y][index] == 1) {
                    led.plot(y, index)
                } else {
                    led.unplot(y, index)
                }
            } else if (b % 4 == 2) {
                if (list[y][index] == 1) {
                    led.plot(4 - index, 4 - y)
                } else {
                    led.unplot(4 - index, 4 - y)
                }
            } else {
                if (list[y][index] == 1) {
                    led.plot(4 - y, 4 - index)
                } else {
                    led.unplot(4 - y, 4 - index)
                }
            }
        }
        list[y].unshift(list[y].pop())
        basic.pause(speed)
    }
}
input.onButtonPressed(Button.B, function () {
    b += 1
})
let list: number[][] = []
let b = 0
b = 0
list = [
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
]
]
control.inBackground(function () {
    led2(0, 1000)
})
control.inBackground(function () {
    led2(1, 500)
})
control.inBackground(function () {
    led2(2, 250)
})
control.inBackground(function () {
    led2(3, 200)
})
control.inBackground(function () {
    led2(4, 100)
})
