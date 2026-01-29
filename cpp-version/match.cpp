#include <vector>
#include <algorithm>
#include <iostream>

#include "Player.h"
#include "archetype.h"
#include "match.h"

using namespace std;




std::vector<double> projectPreferences(const std::vector<double>& pref) {
    std::vector<double> result(pref.size());

    // finds min/max
    double minVal = *std::min_element(pref.begin(), pref.end());
    double maxVal = *std::max_element(pref.begin(), pref.end());

    //if any attributes weren't swayed at all by questioning they should get ignored for vector with user's preferences and not be added 0s
    std::vector<double> relevant;

    for (double v : pref) {
        if (v != 0.0)
            relevant.push_back(v);
    }

    //If no non 0 values,  all 0s get a neutral number
    if (relevant.empty()) {
        // Set all to neutral projected value
        const double MIN_RATING = 70.0;
        const double RANGE = 30.0;
        for (size_t i = 0; i < pref.size(); i++) {
            result[i] = MIN_RATING + 0.5 * RANGE; // neutral number
        }
        return result;
    }

    // projects to 70–100 so increments are near player ratings
    const double MIN_RATING = 70.0;
    const double RANGE = 30.0;

    for (size_t i = 0; i < pref.size(); i++) {
        double normalized;

        if (maxVal == minVal) {
            // Neutral fallback
            normalized = 0.5;
        } else {                                                                       //normalized = (value - min) / (max - min)
            normalized = (pref[i] - minVal) / (maxVal - minVal);//normalize to 1       ex: defense = (0.34 - (-0.04)) / (0.38) = 1.0
        }                                                                       

        result[i] = MIN_RATING + normalized * RANGE;//adds 70 + increment boost
    }
    return result;
}

double distance(const std::vector<double>& a, const std::vector<double>& b){//similarity function using euclidean distance (lower=similar, measures the overall similiarities and penalizes for larger gaps across attributes)
    double sum = 0.0;
    for (size_t i = 0; i < a.size(); i++) {
        double d = a[i] - b[i];
        sum += d * d;
    }//
    return std::sqrt(sum);
}

void findBestMatch(const std::vector<double>& userAttr, const std::vector<Player>& players, ArchetypeFlags &archs){
    const Player* bestMatch = nullptr;
    double bestScore = std::numeric_limits<double>::max();

    for (auto& p : players) {
        double d = distance(userAttr, p.attributes);

        //IN NODE VERSION WITH BIGGER PLAYER DATABASE WILL HAVE NUDGES FOR ALL 30 PLAYERS

        /*if (archs.defenseFirst && (p.name == "Tim Duncan" || p.name == "Bill Russell")) {
            d *= 0.95;  // 5% closer, small nudge
        }*/ //Players like Kawhi Leonard, Duncan, Bill Russell, Hakeem Olajuwon, etc.

        if ((archs.heliocentric && p.name == "LeBron James") || (archs.heliocentric && p.name == "Michael Jordan") || (archs.heliocentric && p.name == "Nikola Jokic")) {
            d *= 0.93;  // 7% closer, another gentle nudge (Ball dominant superstars)
        }
        if ((archs.oneOnOneStyle && p.name == "Kobe Bryant") || (archs.oneOnOneStyle && p.name == "Kevin Durant")) {
            d *= 0.95;  // 5% closer, small nudge 1on1 style players
        }

        if (archs.offenseFirst && p.name == "Stephen Curry" || archs.offenseFirst && p.name == "James Harden") {
            d *= 0.93;  // 7% closer, another gentle nudge
        }
        /*if (archs.teamFirst && p.name == "Bill Russell"){
            d *= 0.95;  // 5% closer, small nudge
        }
        if (archs.systemPlayer && p.name == "Time Duncan") {
            d *= 0.93;  // 7% closer, another gentle nudge
        }*/

        cout << "\nComparing to " << p.name << "\n";

        for (int i = 0; i < ATTRIBUTE_COUNT; i++) {
            double diff = userAttr[i] - p.attributes[i];
            cout << "  Attr " << i
                    << " user=" << userAttr[i]
                    << " player=" << p.attributes[i]
                    << " diff=" << diff << "\n";
        }

        cout << "  Distance: " << d << "\n";

        if (d < bestScore) {
            bestScore = d;
            bestMatch = &p;
        }
    }
    cout << "The player who best aligns with your view of our beloved ganme is: " << bestMatch->name << endl;
    if (archs.context){
        cout << "You are also somebody that thinks context is important when discussing the greatest. \n";
    }

}
