import time
import random
enemy = ["pirate", "vampire", "witch"]
weapon = ["baseball bat", "knife", "pepper spray"]
answer = ["Your weapon was too strong for the enemy, awesome - you won!",
          "You used your weapon, but the enemy was stronger - you lost!"]


def print_pause(message_to_print):
    print(message_to_print)
    time.sleep(2)


def house():
    chosen_answer = random.choice(answer)
    print_pause("You chose to enter the house.")
    print_pause(chosen_answer)


def cave():
    chosen_answer = random.choice(answer)
    print_pause("You chose to enter the cave.")
    print_pause(chosen_answer)


def intro():
    chosen_weapon = random.choice(weapon)
    chosen_enemy = random.choice(enemy)
    print_pause("You find yourself standing in an open field, "
                "filled with grass.")
    print_pause("Rumor has it that a scary " + chosen_enemy + " is "
                "somewhere around here and has been "
                "terrifying the nearby village.")
    print_pause("In front of you there is a house.")
    print_pause("To your right there is a dark cave.")
    print_pause("In your hand you hold your trusty " + chosen_weapon +
                " (which you haven't used in a while).")


exit_flag = 0
while True:
    if exit_flag == 0:
        while True:
            intro()
            first = input("What do you choose the 'house' or the 'cave'?\n")
            first = first.lower()
            if first == "house":
                house()
                break
            elif first == "cave":
                cave()
                break
            else:
                print_pause("Sorry, you must choose between "
                            "the available options")
    else:
        print_pause("Game over, see you next time!")
        break
    while True:
        over = input("GAME OVER! Would you like to play again? (y/n)\n")
        over = over.lower()
        if over == "y":
            print_pause("Okay, let's go again!")
            break
        elif over == "n":
            exit_flag = 1
            break
        else:
            print_pause("Wrong input")
