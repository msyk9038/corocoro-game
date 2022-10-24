input.onGesture(Gesture.TiltRight, function () {
    プレイヤー.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, function () {
    game.pause()
})
input.onGesture(Gesture.TiltLeft, function () {
    プレイヤー.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    プレイヤー.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    プレイヤー.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    game.resume()
})
let プレイヤー: game.LedSprite = null
プレイヤー = game.createSprite(0, 0)
let 敵 = game.createSprite(randint(0, 4), randint(0, 4))
let ゴール = game.createSprite(4, 4)
敵.set(LedSpriteProperty.Blink, 10)
basic.forever(function () {
    敵.change(LedSpriteProperty.X, randint(-1, 1))
    敵.change(LedSpriteProperty.Y, randint(-1, 1))
    basic.pause(1000)
    if (プレイヤー.isTouching(ゴール)) {
        basic.showString("GOAL")
        basic.showIcon(IconNames.Happy)
        control.reset()
    }
    if (プレイヤー.isTouching(敵)) {
        basic.showIcon(IconNames.Skull)
        control.reset()
    }
})
