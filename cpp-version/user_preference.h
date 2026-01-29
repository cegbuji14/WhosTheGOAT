#pragma once

#include <vector>
#include "Attribute.h"

struct UserPreference{
    std::vector<double> attr_vec;//ATTRIBUTE COUNT AUTOMATICALLY COUNTS # OF ATTRIBUTES
    UserPreference() : attr_vec(ATTRIBUTE_COUNT, 0.0) {}
};