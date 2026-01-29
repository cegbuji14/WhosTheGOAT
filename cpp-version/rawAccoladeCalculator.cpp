#include <iostream>
#include <string>
using namespace std;

//Program to give pool of players a relative score based on their accomplishments

// Linear tapering weight calculator, essentially squeezes values within a smaller range while still allowing them to hold relative value
double taperWeight(int n, int n_max, double w_start, double w_end) {
    if (n < 1 || n > n_max) return 0.0;
    return w_start - ((n - 1) * (w_start - w_end)) / (n_max - 1);
}

float champTotal(int c){
    if (c > 3){
        return (((c-3) * (10*.7)) + 30); // Championships get tapered off after 3
    }
    if (c <= 3){
        return (c*10);
    }
    return 0;
}

int finalsMvpTotal(int f){
    return (f * 8);
}

int scoringTitleTotal(int s){
    return (s * 5);
}

double allStarTotal(int a){ // All stars get tapered off after 14
    const int maxSelections = 20;
    const double startWeight = 2.0;
    const double endWeight = 0.5;
    double total = 0.0;
    int count = std::min(a, maxSelections);
    cout << "Calculating All-Star weights for " << a << " selections:\n";
    for (int i = 1; i <= count; ++i) {
        double w = taperWeight(i, maxSelections, startWeight, endWeight);
        cout << "  Selection " << i << ": weight = " << w << endl;
        total += w;
    }
    cout << "Total All-Star weight: " << total << "\n\n";
    return total;
}

int mvpTotal(int m){
    return (m * 10);
}

double allNbaTotal(int a){
    const int maxSelections = 20;
    const double startWeight = 4.0;
    const double endWeight = 0.4;
    double total = 0.0;
    int count = std::min(a, maxSelections);
    cout << "Calculating All-NBA weights for " << a << " selections:\n";
    for (int i = 1; i <= count; ++i) {
        double w = taperWeight(i, maxSelections, startWeight, endWeight);
        cout << "  Selection " << i << ": weight = " << w << endl;
        total += w;
    }
    cout << "Total All-NBA weight: " << total << "\n\n";
    return total;
}

double allDefTotal(int a ){
    const int maxSelections = 15;
    const double startWeight = 4.0;
    const double endWeight = 0.8;
    double total = 0.0;
    int count = std::min(a, maxSelections);
    cout << "Calculating All-Defensive weights for " << a << " selections:\n";
    for (int i = 1; i <= count; ++i) {
        double w = taperWeight(i, maxSelections, startWeight, endWeight);
        cout << "  Selection " << i << ": weight = " << w << endl;
        total += w;
    }
    cout << "Total All-Defensive weight: " << total << "\n\n";
    return total;
}

int dpoyTotal(int d){
    return (d * 8);
}

int sixthOfYearTotal(int s){
    return (s * 3);
}

int main()
{
    int championships, mvps, dpoys, allNba, allDef, sixthOfYear, allStar, fmvps, scoreTitles;

    for (int i = 0; i < 1; i++){ // Changed to 1 for easier testing
        double comp_score = 0.0;

        cout << "Enter the amount of championships player has won\n";
        cin >> championships;
        comp_score += champTotal(championships);
        cout << "Composite score after Championships: " << comp_score << endl;

        cout << "Enter the amount of finals mvps player has won\n";
        cin >> fmvps;
        comp_score += finalsMvpTotal(fmvps);
        cout << "Composite score after Finals MVPs: " << comp_score << endl;

        cout << "Enter the amount of MVPs player has won\n";
        cin >> mvps;
        comp_score += mvpTotal(mvps);
        cout << "Composite score after MVPs: " << comp_score << endl;

        cout << "Enter the amount of DPOYs player has won\n";
        cin >> dpoys;
        comp_score += dpoyTotal(dpoys);
        cout << "Composite score after DPOYs: " << comp_score << endl;

        cout << "Enter the amount of scoring titles player has won\n";
        cin >> scoreTitles;
        comp_score += scoringTitleTotal(scoreTitles);
        cout << "Composite score after Scoring Titles: " << comp_score << endl;

        cout << "Enter the amount of All-NBA selections player has\n";
        cin >> allNba;
        comp_score += allNbaTotal(allNba);
        cout << "Composite score after All-NBA: " << comp_score << endl;

        cout << "Enter the amount of All-Defensive selections player has\n";
        cin >> allDef;
        comp_score += allDefTotal(allDef);
        cout << "Composite score after All-Defensive: " << comp_score << endl;

        cout << "Enter the amount of 6MOY player has won\n";
        cin >> sixthOfYear;
        comp_score += sixthOfYearTotal(sixthOfYear);
        cout << "Composite score after 6MOY: " << comp_score << endl;

        cout << "Enter the amount of All-Star teams player has been selected to\n";
        cin >> allStar;
        comp_score += allStarTotal(allStar);
        cout << "Composite score after All-Star: " << comp_score << endl;

        cout << "Player " << i << "'s composite accolade score is " << comp_score << endl << endl;
    }
}
/*
Leave detailed notes on code. Remove any unnecessary debug logs. Combine this as class with normalizer program.
*/
