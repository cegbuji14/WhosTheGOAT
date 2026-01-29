#include <iostream>
#include <cctype>
#include <string>
#include <vector>
#include <algorithm>

#include "user_state.h"
#include "Attribute.h"
#include "questionaire.h"
#include "match.h"
#include "Player.h"
#include "player_data.h"


using namespace std;

void mainMenu(){
    cout << "\n\nHi! So you've come to find out who's really your GOAT?\n\n "
    "Well good news for you.. we're here to let you know.. \n\n\n\n";
}

int main(){
    UserState user;
    user.preference.attr_vec = std::vector<double>(ATTRIBUTE_COUNT, 0.0);

    mainMenu();
    askQuestions(user);
    ArchetypeFlags user_archetypes = user.archetype;
    user.attribute = projectPreferences(user.preference.attr_vec);

    std::vector<Player> players = loadPlayers();
    findBestMatch(user.attribute, players, user_archetypes);

}
 