#pragma once
#include <vector>
#include "user_preference.h"
#include "archetype.h"
struct UserState {
    UserPreference preference;//raw numbers from tally
    ArchetypeFlags archetype;//personality shapers
    std::vector<double> attribute;
    std::vector<std::string> narrativeTags;//Phrases that match users answer choices
};