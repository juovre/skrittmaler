input.onButtonPressed(Button.A, function () {
    basic.showString("skritt")
    basic.showNumber(skritt)
})
input.onGesture(Gesture.Shake, function () {
    skritt += 2
})
input.onButtonPressed(Button.B, function () {
    basic.showString("skritt")
    basic.showNumber(skritt)
    if (skritt > 20) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let skritt = 0
basic.showIcon(IconNames.Happy)
skritt = 0
