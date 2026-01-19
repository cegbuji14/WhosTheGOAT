#include <iostream>
#include <vector>
#include <cctype>
#include "user_state.h"
#include "user_preference.h"


using namespace std;


/*Takes attribute and applies the increment to the user's preference strut*/
void applyAttributeDelta(UserPreference& pref, Attribute attr, double delta){//passes a vector that keeps up any attribute point increments from weighted questions
    pref.attr_vec[attr] += delta;
}

/*Questions that run GOAT APP*/
void askQuestions(UserState& user){
    char choice;

    cout << "1. Which best describes how you personally believe basketball is won at the highest level? \n"
    "[A]. Repeated individual advantages (One on one matchups across the board decide outcomes)\n"
    "[B]. Structured action and sets (A team's ability to execute a coach's gameplan to perfection is what determines who wins)\n"
    "[C]. Flow and collective movement (A team's understanding of how to improvise and play off of each other is the decider)\n"
    "[D]. A good balance (Stars decide moments but the overall team decides the game)\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        user.archetype.oneOnOneStyle++;
        user.narrativeTags.push_back("values one vs one");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        user.archetype.systemPlayer++;
        user.narrativeTags.push_back("values great coaching led team-oriented play");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        user.archetype.teamFirst++;
        user.narrativeTags.push_back("values teams where a player's knack and ability to complement their teammate's styles reigns");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        user.archetype.teamFirst++;
        user.narrativeTags.push_back("values superstars being superstars and role players being just that");
    }


    cout << "\n\n2. When comparing players from different eras, which matters more to you?\n"
    "[A]. Dominating your own era is what defines greatness\n"
    "[B]. Skills that would translate cleanly to any era\n"
    "[C]. Adjusting evaluation based on rules, spacing, and competiton\n"
    "[D]. Era differences matter, but greatness always rises above context\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        user.narrativeTags.push_back("thinks one's era dominance is imperative");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        user.narrativeTags.push_back("thinks skills are skills regardless of era");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        user.narrativeTags.push_back("thinks you need to keep the game's evolution in mind");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        user.narrativeTags.push_back("thinks differences in eras play a role but great will be great");

    }


    cout << "\n\n3. Historically, what do you believe has won at the highest level more often?\n"
    "[A]. A singular great player driving outcomes\n"
    "[B]. A well-connected team with no weak links\n"
    "[C]. Great players withing strong team structures\n"
    "[D]. It depends heavily on the era and competition \n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        user.archetype.heliocentric++;
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        user.archetype.teamFirst++;
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        user.archetype.systemPlayer++;
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        user.archetype.context++;
    }


    cout << "\n\n4. In high-leverage moments, which approach do you trust more?\n"
    "[A]. A player who consistently makes the 'right' team basketball decision, regardless of personal outcome\n"
    "[B]. A player who assumes responsibility as the leader and personally makes the play\n"
    "[C]. A player who can fluidly do either, depending on the defense and situation\n"
    "[D]. Neither approach in isolation (execution depends on personnel, system and context\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, clutch, 0.08);
        applyAttributeDelta(user.preference, intangibles, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.1);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, clutch, 0.08);
        applyAttributeDelta(user.preference, intangibles, 0.08);
        applyAttributeDelta(user.preference, playmaking, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, clutch, 0.06);
        applyAttributeDelta(user.preference, intangibles, 0.04);
        applyAttributeDelta(user.preference, playmaking, 0.04);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, clutch, 0.02);
        applyAttributeDelta(user.preference, intangibles, 0.02);
        applyAttributeDelta(user.preference, playmaking, 0.02);
    }

    cout << "\n\n5. When evaluating who you win more with, which evidence matters most to you?\n"
    "[A]. Championships won\n"
    "[B]. Deep playoff runs and series wins\n"
    "[C]. Overall team success across many seasons\n"
    "[D]. A combination (Understanding context as far as teammates and competition is imperative\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
    // do nothing
    }

    cout << "\n\n6. When evaluating a player's scoring, how do you weigh shot difficulty and impact?\n"
    "[A]. Tough shot making ability (Contested, Off-balance, Clutch) are more valuable than volume or efficiency\n"
    "[B]. Consistent efficiency on all shots matters most, regardless of difficulty\n"
    "[C]. Both matter (tough shots earn extra credit, but efficiency can't be ignored)\n"
    "[D]. It depends on the team context and game's situation\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, scoring_output, 0.0);
        applyAttributeDelta(user.preference, shot_creation, 0.10);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, scoring_output, 0.10);
        applyAttributeDelta(user.preference, shot_creation, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, scoring_output, 0.05);
        applyAttributeDelta(user.preference, shot_creation, 0.05);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, scoring_output, 0.0);
        applyAttributeDelta(user.preference, shot_creation, 0.0);
        user.archetype.context++;
    }

    cout << "\n\n7. How much credit should a player receive for being as effective off the ball as on the ball?\n"
    "[A]. A lot (great off-ball play changes the game and deserves equal recognition)\n"
    "[B]. Some (off-ball impact matters but not as much as what happens with the ball)\n"
    "[C]. Little (on-ball skills are the true measure of greatness)\n"
    "[D]. It depends on the team's style\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, offball_value, 0.10);
        applyAttributeDelta(user.preference, playmaking, 0.04);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, offball_value, 0.04);
        applyAttributeDelta(user.preference, playmaking, 0.06);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, offball_value, -0.02);
        applyAttributeDelta(user.preference, playmaking, 0.06);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, offball_value, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.0);
        user.archetype.context++;
    }

    cout << "\n\n8. When comparing players, which do you value more?\n"
    "[A]. Players who excel as both the main option and a supporting role, adapting as needed\n"
    "[B]. Players who produce strong stats while being central to their team's strategy\n"
    "[C]. Both matter equally (role execution and stats are different sides of greatness)\n"
    "[D]. It depends on the era, team context, and competition\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, offball_value, 0.05);
        applyAttributeDelta(user.preference, versatility, 0.05);
        applyAttributeDelta(user.preference, player_size, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.05);
        applyAttributeDelta(user.preference, shot_creation, 0.04);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, offball_value, 0.0);
        applyAttributeDelta(user.preference, versatility, 0.0);
        applyAttributeDelta(user.preference, player_size, 0.03);
        applyAttributeDelta(user.preference, playmaking, 0.06);
        applyAttributeDelta(user.preference, shot_creation, 0.05);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, offball_value, 0.03);
        applyAttributeDelta(user.preference, versatility, 0.03);
        applyAttributeDelta(user.preference, player_size, 0.03);
        applyAttributeDelta(user.preference, playmaking, 0.03);
        applyAttributeDelta(user.preference, shot_creation, 0.03);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, offball_value, 0.0);
        applyAttributeDelta(user.preference, versatility, 0.0);
        applyAttributeDelta(user.preference, player_size, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.0);
        applyAttributeDelta(user.preference, shot_creation, 0.0);
        user.archetype.context++;
    }

    cout << "\n\n9. How much weight do you give to a players ability to make game-changing shots in crucial moments?\n"
    "[A]. High (Clutch plays often swing momentum and define careers)\n"
    "[B]. Moderate (Clutch ability matters but should be balanced with overall consistency)\n"
    "[C]. Low (Making the right plays leading up to the shot is more important than the shot itself)\n"
    "[D]. Context matters (Team makeup and era can amplify or diminish clutch value)\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, clutch, 0.10);
        applyAttributeDelta(user.preference, scoring_output, 0.05);
        applyAttributeDelta(user.preference, playmaking, 0.02);
        applyAttributeDelta(user.preference, intangibles, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, clutch, 0.06);
        applyAttributeDelta(user.preference, scoring_output, 0.05);
        applyAttributeDelta(user.preference, playmaking, 0.03);
        applyAttributeDelta(user.preference, intangibles, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, clutch, 0.02);
        applyAttributeDelta(user.preference, scoring_output, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.10);
        applyAttributeDelta(user.preference, intangibles, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, clutch, 0.0);
        applyAttributeDelta(user.preference, scoring_output, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.0);
        applyAttributeDelta(user.preference, intangibles, 0.0);
        user.archetype.context++;
    }

    cout << "\n\n10. Which type of player contributions do you believe have the biggest impact that often go unnoticed in traditional statistics?\n"
    "[A]. Defensive plays like deflections, disrupting pass lanes, and help defense\n"
    "[B]. Off-ball movement that creates scoring opportunities for teammates\n"
    "[C]. Leadership and communication that influence team cohesion and morale\n"
    "[D]. All of the above (Intangible impact is critical and multifaceted)\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, clutch, 0.04);
        applyAttributeDelta(user.preference, scoring_output, 0.08);
        applyAttributeDelta(user.preference, playmaking, 0.0);
        applyAttributeDelta(user.preference, intangibles, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, clutch, 0.0);
        applyAttributeDelta(user.preference, scoring_output, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.0);
        applyAttributeDelta(user.preference, intangibles, 0.10);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, clutch, 0.0);
        applyAttributeDelta(user.preference, scoring_output, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.10);
        applyAttributeDelta(user.preference, intangibles, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, clutch, 0.03);
        applyAttributeDelta(user.preference, scoring_output, 0.03);
        applyAttributeDelta(user.preference, playmaking, 0.03);
        applyAttributeDelta(user.preference, intangibles, 0.03);
    }

    cout << "\n\n11. How much should changes in defensive rules and strategies across eras influence how we evaluate an offensive player's impact?\n"
    "[A]. Greatly (Rule changes significantly affect how easy or difficult is to score and create plays)\n"
    "[B]. Moderately (Rule changes matter, but individual skills and adaptability are more important)\n"
    "[C]. Minimally (Elite offensive players excel regardless of rules or era)\n"
    "[D]. It depends on the specific player's style and team system\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        user.narrativeTags.push_back("believes that defense rule changes have greatly changed the game over the years");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        user.narrativeTags.push_back("believes that although there have been defensive rule changes, the essence of the game always overcomes");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        user.narrativeTags.push_back("believes defensive rule changes have not had any substantial changes that slow the truly elite down");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        user.narrativeTags.push_back("believes how much a player is affected by defensive rules is all relative");
    }

    cout << "\n\n12. When evaluating greatness, how much should we consider a player's skill relative to their era's competition?\n"
    "[A]. Very important (Greatness includes how much better they were than their contemporaries)\n"
    "[B]. Important (Competition matters, but absolute skill and impact are key too)\n"
    "[C]. Less important (Greatness is based mostly on a player's own skill, regardless of competiton\n"
    "[D]. Context matters (Team, era, and playoff vs regular season all affect evaluation)\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
    // do nothing
    }

    cout << "\n\n13. Should players be penalized in evaluation for having a lesser role if their team achieves greater success?\n"
    "[A]. No (Excelling in any role that leads to team success is equally valuable)\n"
    "[B]. Yes (Players with bigger roles and stats should be rewarded more)\n"
    "[C]. Both (Context matters; Role size, team success, and roster construction should be balanced)\n"
    "[D]. It depends on era, team system, and position\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        user.archetype.systemPlayer++;
        user.archetype.teamFirst++;
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        user.archetype.heliocentric++;
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        user.archetype.teamFirst++;
        user.archetype.heliocentric++;
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        user.archetype.context++;
    }

    cout << "\n\n14. What do you believe is the single most valuable skill a player can have when they have the ball?\n"
    "[A]. The ability to create efficient scoring opportunities for themselves or teammates\n"
    "[B]. The ability to maintain control and minmize turnovers under pressure\n"
    "[C]. The ability to draw fouls and get to the free-throw line\n"
    "[D]. The ability to set the pace and tempo to control the game flow\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, scoring_output, 0.06);
        applyAttributeDelta(user.preference, shot_creation, 0.06);
        applyAttributeDelta(user.preference, playmaking, 0.01);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, scoring_output, 0.0);
        applyAttributeDelta(user.preference, shot_creation, 0.0);
        applyAttributeDelta(user.preference, playmaking, 0.08);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, scoring_output, 0.03);
        applyAttributeDelta(user.preference, shot_creation, 0.03);
        applyAttributeDelta(user.preference, playmaking, 0.01);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, scoring_output, 0.02);
        applyAttributeDelta(user.preference, shot_creation, 0.04);
        applyAttributeDelta(user.preference, playmaking, 0.03);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'e') {
        applyAttributeDelta(user.preference, scoring_output, 0.02);
        applyAttributeDelta(user.preference, shot_creation, 0.02);
        applyAttributeDelta(user.preference, playmaking, 0.02);
    }

    cout << "\n\n15. Which of the following best describes how you think about basketball roles?\n"
    "[A]. Players should specialize deeply in a few defined roles to maximize team efficiency\n"
    "[B]. Versatility is key (Players should be able to fill multiple roles as needed)\n"
    "[C]. Roles matter less; what matters most is how well a player contributes to winning\n"
    "[D]. Roles evolve with the game, so evaluation should be flexible and context-driven\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, versatility, 0.06);
        applyAttributeDelta(user.preference, player_size, 0.02);
        applyAttributeDelta(user.preference, athleticism, 0.04);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, versatility, 0.08);
        applyAttributeDelta(user.preference, player_size, 0.08);
        applyAttributeDelta(user.preference, athleticism, 0.06);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, versatility, 0.0);
        applyAttributeDelta(user.preference, player_size, 0.0);
        applyAttributeDelta(user.preference, athleticism, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, versatility, 0.04);
        applyAttributeDelta(user.preference, player_size, 0.04);
        applyAttributeDelta(user.preference, athleticism, 0.04);
        user.archetype.context++;
    }

    cout << "\n\n16. When do you think being aggressive, even with lower shooting efficiency, benefits the team most?\n"
    "[A]. Late in games when creating scoring opportunities or drawing fouls is critical\n"
    "[B]. When the team lacks other reliable scorers and needs someone to take charge\n"
    "[C]. When aggressiveness keeps the defense off balance, creating easier opportunities for teammates\n"
    "[D]. Rarely (Efficiency should almost always be prioritized over volume)\n"
    "[E]. It depends on the player's role, team strategy, and game situation\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, shot_creation, 0.06);
        applyAttributeDelta(user.preference, intangibles, 0.03);
        applyAttributeDelta(user.preference, scoring_output, 0.0);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, shot_creation, 0.07);
        applyAttributeDelta(user.preference, intangibles, 0.05);
        applyAttributeDelta(user.preference, scoring_output, 0.04);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, shot_creation, 0.08);
        applyAttributeDelta(user.preference, intangibles, 0.03);
        applyAttributeDelta(user.preference, scoring_output, 0.04);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, shot_creation, 0.01);
        applyAttributeDelta(user.preference, intangibles, 0.0);
        applyAttributeDelta(user.preference, scoring_output, 0.08);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'e') {
        applyAttributeDelta(user.preference, shot_creation, 0.02);
        applyAttributeDelta(user.preference, intangibles, 0.02);
        applyAttributeDelta(user.preference, scoring_output, 0.02);
    }

    cout << "\n\n17. When evaluating a player's legacy how much weight should their impact on the NBA championships they won carry?\n"
    "[A]. A lot (Championships are the ultimate measure of greatness regardless of individual contributions)\n"
    "[B]. Moderate  (Championships matter but should be balanced with indivdual skills and consistency)\n"
    "[C]. Low (Championships depend too much on teammates and circumstance to be weighted heavily)\n"
    "[D]. It depends (Era, team context and role affect how championships should be valued)\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        user.narrativeTags.push_back("believes championships are very important but the role you played in getting it is equally");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        user.narrativeTags.push_back("believes championships are important and bigger roles count more ");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        user.narrativeTags.push_back("believes championships are very hard and everybody's role carries a lot of weight");
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        user.narrativeTags.push_back("believes context needs to be front and center when examining championships");
    }

    cout << "\n\n18. To what extent do you think a player's style of play and overall impact influence how they are officiated or treated by the league?\n"
    "[A]. Significantly (Style and impact shape favorable or unfavorable treatment)\n"
    "[B]. Moderately (These factors matter but officials aim for consistency)\n"
    "[C]. Minimally (Officiating is largely impartial regardless of player)\n"
    "[D]. It depends on era, player personalirt, and media narratives\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
    // do nothing
    }

     cout << "\n\n19. When assessing a player's greatness, how important is the quality of opponents they face in different situations?\n"
    "[A]. Very important (Beating top talent in playoffs and regular season defines greatness)\n"
    "[B]. Somewhat important (Opponent quality matters but should be balanced with other factors)\n"
    "[C]. Less important (A truly great player dominates regardless of who they face)\n"
    "[D]. It depends (Era, team context, and game situation affect how opponent strength should be weighted)\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        user.archetype.context++;
    }

    cout << "\n\n20. How much should a player's offensive system influence how we evaluate their production and efficiency?\n"
    "[A]. A lot (System, role, and usage heavily shape stats and shot quality)\n"
    "[B]. Some (Great players transcend systems, but context still matters)\n"
    "[C]. Very little (Production should stand on its own regardless of system)\n"
    "[D]. It depends (Era, roster construction, and offensive philosophy all matter)\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
    // do nothing
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
    // do nothing
    }

    cout << "\n\n21. How much should formal accolades influence how a player's career is evaluated?\n"
    "[A]. Championships and major awards should heavily influence evaluation\n"
    "[B]. Accolades matter, but should be balanced with on-court impact\n"
    "[C]. Accolades provide context, but skill and play matter more\n"
    "[D]. Accolades should have minimal influence; evaluation should focus on performance\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, accolades, 0.08);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, accolades, 0.06);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, accolades, 0.02);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, accolades, 0.0);
    }

    cout << "\n\n22. How important is sustained excellence over many seasons when evaluating a player?\n"
    "[A]. Extremely important (Maintaing a high level over many years is a major)\n"
    "[B]. Important (Longevity matters, but peak performance matters more)\n"
    "[C]. Slightly important (Long careers are valuable, but impact matters most)\n"
    "[D]. Not very important (Greatness is defined by peak ability, not duration)\n\n";
    cin >> choice;
    if (std::tolower(static_cast<unsigned char>(choice)) == 'a') {
        applyAttributeDelta(user.preference, accolades, 0.08);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'b') {
        applyAttributeDelta(user.preference, accolades, 0.06);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'c') {
        applyAttributeDelta(user.preference, accolades, 0.02);
    }
    if (std::tolower(static_cast<unsigned char>(choice)) == 'd') {
        applyAttributeDelta(user.preference, accolades, 0.0);
    }
}