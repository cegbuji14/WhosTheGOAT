#pragma once

#include "user_preference.h"
#include "Attribute.h"
#include "user_state.h"

void applyAttributeDelta(UserPreference& pref, Attribute attr, double delta);//function for applying increments
void askQuestions(UserState& user);//asks users thecore questions and adds points to the preference struct based on answer choices