def Hp_Check():
    if hp == 2:
        h3.delete()
    if hp == 1:
        h2.delete()
    if hp == 0:
        h1.delete()
        game.game_over()
        basic.show_number(game.score())
def Create_Enemy():
    global e, isE
    e = game.create_sprite(5, randint(2, 4))
    isE = 1
    for index in range(4):
        basic.pause(200)
        e.change(LedSpriteProperty.X, -1)
    isE = 0
    e.delete()

def on_button_pressed_b():
    jump()
input.on_button_pressed(Button.B, on_button_pressed_b)

def jump():
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    player.change(LedSpriteProperty.Y, 1)
isE = 0
e: game.LedSprite = None
player: game.LedSprite = None
hp = 0
h3: game.LedSprite = None
h2: game.LedSprite = None
h1: game.LedSprite = None
h1 = game.create_sprite(0, 0)
h2 = game.create_sprite(1, 0)
h3 = game.create_sprite(2, 0)
hp = 3
game.set_life(3)
player = game.create_sprite(1, 4)

def on_forever():
    basic.pause(randint(500, 2000))
    Create_Enemy()
basic.forever(on_forever)

def on_forever2():
    global hp
    if isE == 1:
        if player.is_touching(e):
            hp += -1
            game.remove_life(1)
            Hp_Check()
            basic.pause(500)
basic.forever(on_forever2)
