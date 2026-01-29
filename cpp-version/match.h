#pragma once

#include <vector>
#include "Player.h"
#include "archetype.h"

std::vector<double> projectPreferences(const std::vector<double>& pref);
double distance(const std::vector<double>& a, const std::vector<double>& b);
void findBestMatch(const std::vector<double>& userAttr, const std::vector<Player>& players, ArchetypeFlags &archs);
