/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott roach
 * Created on: Sep 2024
 * This program takes light levels
*/

let lightIntensity = 0
let neopixleStrip: neopixel.Strip = null
//clean
basic.clearScreen()
neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {

    lightIntensity = input.lightLevel()

//vary dark
    if (lightIntensity <= 51) {
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    }

//dark
    if (lightIntensity > 52) {
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    }

//moderit light
    if (lightIntensity > 104) {
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    }

//bright
    if (lightIntensity > 156) {
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    }

//vary light
    if (lightIntensity > 208) {
        neopixleStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixleStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        neopixleStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    }

})
