input.onButtonPressed(Button.A, function () {
    if (paddleW.get(LedSpriteProperty.X) > 0) {
        paddleW.change(LedSpriteProperty.X, -1)
        paddleO.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddleW.get(LedSpriteProperty.X) > 0) {
        paddleW.change(LedSpriteProperty.X, 1)
        paddleO.change(LedSpriteProperty.X, 1)
    }
})
let sprite = 0
let paddleO: game.LedSprite = null
let paddleW: game.LedSprite = null
paddleW = game.createSprite(2, 4)
paddleO = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let directionX = randint(-1, 1)
let directionY = 1
basic.pause(500)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, directionX)
    ball.change(LedSpriteProperty.Y, directionY)
    if (ball.isTouching(paddleW) || ball.isTouching(paddleO)) {
        ball.change(LedSpriteProperty.X, directionX * -1)
        ball.change(LedSpriteProperty.Y, -1)
        sprite = 0
    } else {
    	
    }
})
