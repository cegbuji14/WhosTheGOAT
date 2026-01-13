#include <iostream>
#include <string>
#include <cmath>
#include <vector>
using namespace std;

double softCap(double x) {//used so the top accolade scores will still be about of 100 because raw scores like MJ & Kareem are way higher
    const double anchor  = 87.0;     // where compression begins
    const double ceiling = 99.99;    // absolute max
    const double k       = 60.0;      // compression strength

    if (x <= anchor)
        return x;

    //cout << ceiling - (ceiling - anchor) * exp(-(x - anchor) / k);
    return ceiling - (ceiling - anchor) * exp(-(x - anchor) / k);
}




double percentileNormalizer(double x, int n, vector<double>& arr){
    //softCap(x);
    if (((x/arr[n]) * 100) >= 93){//starting at steph
        cout << softCap(x) << endl;
        }
    else{
        return ((x/arr[n]) * 100);
    }
    
    }
    
    
int main()
{
    vector<double> accolade_list(30);
    double accolade_val;
    int index;
    double test_num;
    //could read list and sort values
    accolade_list = {50.19, 61.24, 64.89, 71.68, 72.35, 72.37, 79.57, 84.31, 84.36, 97.02, 100.55, 100.85, 102.31, 107.17, 108.05, 111.8, 116.52, 121.29, 126.24, 137.58, 144.06, 148.26, 152.78, 162.09, 176.94, 185.82, 192.37, 203.57, 233.03, 289.16};
    
    //accolade_list.sort();
    
    index = ceil(0.70 * 30) - 1;// change based on percentile being solved for
    
    cout << index << endl << endl << accolade_list[index] << endl << endl << "Enter the raw score of the player: \n";
    cin >> test_num;
    
    cout << percentileNormalizer(test_num, index, accolade_list);
    
    /*Future Optimization
    -Pull the data from excel sheet instead of hardcoding it.
    -Sort the data
    -Clean up code (Make Class? Make neater. Leave extremely detailed notes
    */
}
