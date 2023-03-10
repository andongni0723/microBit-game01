function Create_Enemy () {
    e = game.createSprite(5, randint(2, 4))
    isE = 1
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        e.change(LedSpriteProperty.X, -1)
    }
    isE = 0
    e.delete()
}
function Hp_Check () {
    if (hp == 2) {
        h3.delete()
    }
    if (hp == 1) {
        h2.delete()
    }
    if (hp == 0) {
        h1.delete()
        game.gameOver()
        basic.showNumber(game.score())
    }
}
input.onButtonPressed(Button.A, function () {
    if (gs == 0) {
        Game_Start()
        gs += 1
    }
})
function Game_Start () {
    h1 = game.createSprite(0, 0)
    h2 = game.createSprite(1, 0)
    h3 = game.createSprite(2, 0)
    hp = 3
    gs = 0
    game.setLife(3)
    player = game.createSprite(1, 4)
}
input.onButtonPressed(Button.B, function () {
    jump()
})
function jump () {
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, 1)
}
let player: game.LedSprite = null
let h1: game.LedSprite = null
let h2: game.LedSprite = null
let h3: game.LedSprite = null
let hp = 0
let isE = 0
let e: game.LedSprite = null
let gs = 0
gs = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.forever(function () {
    basic.pause(randint(500, 2000))
    Create_Enemy()
})
basic.forever(function () {
    if (isE == 1) {
        if (player.isTouching(e)) {
            hp += -1
            game.removeLife(1)
            Hp_Check()
            basic.pause(500)
        }
    }
})
