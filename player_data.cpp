#include "Player.h"

std::vector<Player> loadPlayers() {
    return {
        {
            "Michael Jordan",
            {98,98,88,94,95,94,83,78,98,98,92,98,99.54}//same order as attribute enum
        },
        {
            "Kobe Bryant",
            {89,100,86,89,95,87,90,77,94,98,96,97,97.09}//same order as attribute enum
        },
        {
            "Stephen Curry",
            {94,96,92,100,83,84,85,68,91,94,94,95,87.63}//same order as attribute enum
        },
        {
            "LeBron James",
            {94,94,98,88,94,94,100,88,98,96,100,98,98.13}
        },
        {
            "Nikola Jokic",
            {93,88,99,89,88,90,88,91,72,98,90,98,58.56}//same order as attribute enum
        }
    };
}
