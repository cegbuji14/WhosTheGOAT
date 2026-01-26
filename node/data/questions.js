export const QUESTIONS = [
    {
      id: "roles_philosophy",
      text: "Which of the following best describes how you think about basketball roles?",
      options: {
        a: "Players should specialize deeply in a few defined roles to maximize team efficiency",
        b: "Versatility is key (Players should be able to fill multiple roles as needed)",
        c: "Roles matter less; what matters most is how well a player contributes to winning",
        d: "Roles evolve with the game, so evaluation should be flexible and context-driven",
      },
      effects: {
        a: {
          VERSATILITY: 0.06,
          PLAYER_SIZE: 0.02,
          ATHLETICISM: 0.04,
        },
        b: {
          VERSATILITY: 0.08,
          PLAYER_SIZE: 0.08,
          ATHLETICISM: 0.06,
        },
        c: {},
        d: {
          VERSATILITY: 0.04,
          PLAYER_SIZE: 0.04,
          ATHLETICISM: 0.04,
          __ARCHETYPE__: { context: 1 },
        },
      },
    },
    {
        id: "basketball_winning_style",
        text: "Which best describes how you personally believe basketball is won at the highest level?",
        options: {
          a: "Repeated individual advantages (One on one matchups across the board decide outcomes)",
          b: "Structured action and sets (A team's ability to execute a coach's gameplan to perfection is what determines who wins)",
          c: "Flow and collective movement (A team's understanding of how to improvise and play off of each other is the decider)",
          d: "A good balance (Stars decide moments but the overall team decides the game)",
        },
        effects: {
          a: {
            __ARCHETYPE__: { oneOnOneStyle: 1 },
            __NARRATIVE_TAGS__: ["values one vs one"],
          },
          b: {
            __ARCHETYPE__: { systemPlayer: 1 },
            __NARRATIVE_TAGS__: ["values great coaching led team-oriented play"],
          },
          c: {
            __ARCHETYPE__: { teamFirst: 1 },
            __NARRATIVE_TAGS__: ["values teams where a player's knack and ability to complement their teammate's styles reigns"],
          },
          d: {
            __ARCHETYPE__: { teamFirst: 1 },
            __NARRATIVE_TAGS__: ["values superstars being superstars and role players being just that"],
          },
        },
      },
      {
        id: "era_comparison_importance",
        text: "When comparing players from different eras, which matters more to you?",
        options: {
          a: "Dominating your own era is what defines greatness",
          b: "Skills that would translate cleanly to any era",
          c: "Adjusting evaluation based on rules, spacing, and competition",
          d: "Era differences matter, but greatness always rises above context",
        },
        effects: {
          a: {
            __NARRATIVE_TAGS__: ["thinks one's era dominance is imperative"],
          },
          b: {
            __NARRATIVE_TAGS__: ["thinks skills are skills regardless of era"],
          },
          c: {
            __NARRATIVE_TAGS__: ["thinks you need to keep the game's evolution in mind"],
          },
          d: {
            __NARRATIVE_TAGS__: ["thinks differences in eras play a role but great will be great"],
          },
        },
      },
      {
        id: "historical_winning_factors",
        text: "Historically, what do you believe has won at the highest level more often?",
        options: {
          a: "A singular great player driving outcomes",
          b: "A well-connected team with no weak links",
          c: "Great players within strong team structures",
          d: "It depends heavily on the era and competition",
        },
        effects: {
          a: {
            __ARCHETYPE__: { heliocentric: 1 },
          },
          b: {
            __ARCHETYPE__: { teamFirst: 1 },
          },
          c: {
            __ARCHETYPE__: { systemPlayer: 1 },
          },
          d: {
            __ARCHETYPE__: { context: 1 },
          },
        },
      },
      {
        id: "high_leverage_trust",
        text: "In high-leverage moments, which approach do you trust more?",
        options: {
          a: "A player who consistently makes the 'right' team basketball decision, regardless of personal outcome",
          b: "A player who assumes responsibility as the leader and personally makes the play",
          c: "A player who can fluidly do either, depending on the defense and situation",
          d: "Neither approach in isolation (execution depends on personnel, system and context)",
        },
        effects: {
          a: {
            CLUTCH: 0.08,
            INTANGIBLES: 0.0,
            PLAYMAKING: 0.1,
          },
          b: {
            CLUTCH: 0.08,
            INTANGIBLES: 0.08,
            PLAYMAKING: 0.0,
          },
          c: {
            CLUTCH: 0.06,
            INTANGIBLES: 0.04,
            PLAYMAKING: 0.04,
          },
          d: {
            CLUTCH: 0.02,
            INTANGIBLES: 0.02,
            PLAYMAKING: 0.02,
          },
        },
      },
      {
        id: "winning_evidence",
        text: "When evaluating who you win more with, which evidence matters most to you?",
        options: {
          a: "Championships won",
          b: "Deep playoff runs and series wins",
          c: "Overall team success across many seasons",
          d: "A combination (Understanding context as far as teammates and competition is imperative)",
        },
        effects: {
          a: {},
          b: {},
          c: {},
          d: {},
        },
      },
      {
        id: "scoring_weight",
        text: "When evaluating a player's scoring, how do you weigh shot difficulty and impact?",
        options: {
          a: "Tough shot making ability (Contested, Off-balance, Clutch) are more valuable than volume or efficiency",
          b: "Consistent efficiency on all shots matters most, regardless of difficulty",
          c: "Both matter (tough shots earn extra credit, but efficiency can't be ignored)",
          d: "It depends on the team context and game's situation",
        },
        effects: {
          a: {
            SCORING_OUTPUT: 0.0,
            SHOT_CREATION: 0.10,
          },
          b: {
            SCORING_OUTPUT: 0.10,
            SHOT_CREATION: 0.0,
          },
          c: {
            SCORING_OUTPUT: 0.05,
            SHOT_CREATION: 0.05,
          },
          d: {
            SCORING_OUTPUT: 0.0,
            SHOT_CREATION: 0.0,
            __ARCHETYPE__: { context: 1 },
          },
        },
      },
      {
        id: "offball_credit",
        text: "How much credit should a player receive for being as effective off the ball as on the ball?",
        options: {
          a: "A lot (great off-ball play changes the game and deserves equal recognition)",
          b: "Some (off-ball impact matters but not as much as what happens with the ball)",
          c: "Little (on-ball skills are the true measure of greatness)",
          d: "It depends on the team's style",
        },
        effects: {
          a: {
            OFFBALL_VALUE: 0.10,
            PLAYMAKING: 0.04,
          },
          b: {
            OFFBALL_VALUE: 0.04,
            PLAYMAKING: 0.06,
          },
          c: {
            OFFBALL_VALUE: -0.02,
            PLAYMAKING: 0.06,
          },
          d: {
            OFFBALL_VALUE: 0.0,
            PLAYMAKING: 0.0,
            __ARCHETYPE__: { context: 1 },
          },
        },
      },
      {
        id: "player_comparison_value",
        text: "When comparing players, which do you value more?",
        options: {
          a: "Players who excel as both the main option and a supporting role, adapting as needed",
          b: "Players who produce strong stats while being central to their team's strategy",
          c: "Both matter equally (role execution and stats are different sides of greatness)",
          d: "It depends on the era, team context, and competition",
        },
        effects: {
          a: {
            OFFBALL_VALUE: 0.05,
            VERSATILITY: 0.05,
            PLAYER_SIZE: 0.0,
            PLAYMAKING: 0.05,
            SHOT_CREATION: 0.04,
          },
          b: {
            OFFBALL_VALUE: 0.0,
            VERSATILITY: 0.0,
            PLAYER_SIZE: 0.03,
            PLAYMAKING: 0.06,
            SHOT_CREATION: 0.05,
          },
          c: {
            OFFBALL_VALUE: 0.03,
            VERSATILITY: 0.03,
            PLAYER_SIZE: 0.03,
            PLAYMAKING: 0.03,
            SHOT_CREATION: 0.03,
          },
          d: {
            OFFBALL_VALUE: 0.0,
            VERSATILITY: 0.0,
            PLAYER_SIZE: 0.0,
            PLAYMAKING: 0.0,
            SHOT_CREATION: 0.0,
            __ARCHETYPE__: { context: 1 },
          },
        },
      },
      {
        id: "clutch_shot_weight",
        text: "How much weight do you give to a player's ability to make game-changing shots in crucial moments?",
        options: {
          a: "High (Clutch plays often swing momentum and define careers)",
          b: "Moderate (Clutch ability matters but should be balanced with overall consistency)",
          c: "Low (Making the right plays leading up to the shot is more important than the shot itself)",
          d: "Context matters (Team makeup and era can amplify or diminish clutch value)",
        },
        effects: {
          a: {
            CLUTCH: 0.10,
            SCORING_OUTPUT: 0.05,
            PLAYMAKING: 0.02,
            INTANGIBLES: 0.0,
          },
          b: {
            CLUTCH: 0.06,
            SCORING_OUTPUT: 0.05,
            PLAYMAKING: 0.03,
            INTANGIBLES: 0.0,
          },
          c: {
            CLUTCH: 0.02,
            SCORING_OUTPUT: 0.0,
            PLAYMAKING: 0.10,
            INTANGIBLES: 0.0,
          },
          d: {
            CLUTCH: 0.0,
            SCORING_OUTPUT: 0.0,
            PLAYMAKING: 0.0,
            INTANGIBLES: 0.0,
            __ARCHETYPE__: { context: 1 },
          },
        },
      },
      {
        id: "unnoticed_impact",
        text: "Which type of player contributions do you believe have the biggest impact that often go unnoticed in traditional statistics?",
        options: {
          a: "Defensive plays like deflections, disrupting pass lanes, and help defense",
          b: "Off-ball movement that creates scoring opportunities for teammates",
          c: "Leadership and communication that influence team cohesion and morale",
          d: "All of the above (Intangible impact is critical and multifaceted)",
        },
        effects: {
          a: {
            CLUTCH: 0.04,
            SCORING_OUTPUT: 0.08,
            PLAYMAKING: 0.0,
            INTANGIBLES: 0.0,
          },
          b: {
            CLUTCH: 0.0,
            SCORING_OUTPUT: 0.0,
            PLAYMAKING: 0.0,
            INTANGIBLES: 0.10,
          },
          c: {
            CLUTCH: 0.0,
            SCORING_OUTPUT: 0.0,
            PLAYMAKING: 0.10,
            INTANGIBLES: 0.0,
          },
          d: {
            CLUTCH: 0.03,
            SCORING_OUTPUT: 0.03,
            PLAYMAKING: 0.03,
            INTANGIBLES: 0.03,
          },
        },
      },
      {
        id: "defensive_rule_changes_impact",
        text: "How much should changes in defensive rules and strategies across eras influence how we evaluate an offensive player's impact?",
        options: {
          a: "Greatly (Rule changes significantly affect how easy or difficult is to score and create plays)",
          b: "Moderately (Rule changes matter, but individual skills and adaptability are more important)",
          c: "Minimally (Elite offensive players excel regardless of rules or era)",
          d: "It depends on the specific player's style and team system",
        },
        effects: {
          a: {
            __NARRATIVE_TAGS__: ["believes that defense rule changes have greatly changed the game over the years"],
          },
          b: {
            __NARRATIVE_TAGS__: ["believes that although there have been defensive rule changes, the essence of the game always overcomes"],
          },
          c: {
            __NARRATIVE_TAGS__: ["believes defensive rule changes have not had any substantial changes that slow the truly elite down"],
          },
          d: {
            __NARRATIVE_TAGS__: ["believes how much a player is affected by defensive rules is all relative"],
          },
        },
      },
      {
        id: "greatness_vs_era_competition",
        text: "When evaluating greatness, how much should we consider a player's skill relative to their era's competition?",
        options: {
          a: "Very important (Greatness includes how much better they were than their contemporaries)",
          b: "Important (Competition matters, but absolute skill and impact are key too)",
          c: "Less important (Greatness is based mostly on a player's own skill, regardless of competition)",
          d: "Context matters (Team, era, and playoff vs regular season all affect evaluation)",
        },
        effects: {
          a: {},
          b: {},
          c: {},
          d: {},
        },
      },
      {
        id: "penalized_for_lesser_role",
        text: "Should players be penalized in evaluation for having a lesser role if their team achieves greater success?",
        options: {
          a: "No (Excelling in any role that leads to team success is equally valuable)",
          b: "Yes (Players with bigger roles and stats should be rewarded more)",
          c: "Both (Context matters; Role size, team success, and roster construction should be balanced)",
          d: "It depends on era, team system, and position",
        },
        effects: {
          a: {
            __ARCHETYPE__: { systemPlayer: 1, teamFirst: 1 },
          },
          b: {
            __ARCHETYPE__: { heliocentric: 1 },
          },
          c: {
            __ARCHETYPE__: { teamFirst: 1, heliocentric: 1 },
          },
          d: {
            __ARCHETYPE__: { context: 1 },
          },
        },
      },
      {
        id: "most_valuable_skill_on_ball",
        text: "What do you believe is the single most valuable skill a player can have when they have the ball?",
        options: {
          a: "The ability to create efficient scoring opportunities for themselves or teammates",
          b: "The ability to maintain control and minimize turnovers under pressure",
          c: "The ability to draw fouls and get to the free-throw line",
          d: "The ability to set the pace and tempo to control the game flow",
          e: "It depends on the player’s role and team context",
        },
        effects: {
          a: {
            SCORING_OUTPUT: 0.06,
            SHOT_CREATION: 0.06,
            PLAYMAKING: 0.01,
          },
          b: {
            SCORING_OUTPUT: 0.0,
            SHOT_CREATION: 0.0,
            PLAYMAKING: 0.08,
          },
          c: {
            SCORING_OUTPUT: 0.03,
            SHOT_CREATION: 0.03,
            PLAYMAKING: 0.01,
          },
          d: {
            SCORING_OUTPUT: 0.02,
            SHOT_CREATION: 0.04,
            PLAYMAKING: 0.03,
          },
          e: {
            SCORING_OUTPUT: 0.02,
            SHOT_CREATION: 0.02,
            PLAYMAKING: 0.02,
          },
        },
      },
      {
        id: "roles_philosophy",
        text: "Which of the following best describes how you think about basketball roles?",
        options: {
          a: "Players should specialize deeply in a few defined roles to maximize team efficiency",
          b: "Versatility is key (Players should be able to fill multiple roles as needed)",
          c: "Roles matter less; what matters most is how well a player contributes to winning",
          d: "Roles evolve with the game, so evaluation should be flexible and context-driven",
        },
        effects: {
          a: {
            VERSATILITY: 0.06,
            PLAYER_SIZE: 0.02,
            ATHLETICISM: 0.04,
          },
          b: {
            VERSATILITY: 0.08,
            PLAYER_SIZE: 0.08,
            ATHLETICISM: 0.06,
          },
          c: {
            VERSATILITY: 0.0,
            PLAYER_SIZE: 0.0,
            ATHLETICISM: 0.0,
          },
          d: {
            VERSATILITY: 0.04,
            PLAYER_SIZE: 0.04,
            ATHLETICISM: 0.04,
            __ARCHETYPE__: { context: 1 },
          },
        },
      },
      {
        id: "aggressiveness_vs_efficiency",
        text: "When do you think being aggressive, even with lower shooting efficiency, benefits the team most?",
        options: {
          a: "Late in games when creating scoring opportunities or drawing fouls is critical",
          b: "When the team lacks other reliable scorers and needs someone to take charge",
          c: "When aggressiveness keeps the defense off balance, creating easier opportunities for teammates",
          d: "Rarely (Efficiency should almost always be prioritized over volume)",
          e: "It depends on the player's role, team strategy, and game situation",
        },
        effects: {
          a: {
            SHOT_CREATION: 0.06,
            INTANGIBLES: 0.03,
            SCORING_OUTPUT: 0.0,
          },
          b: {
            SHOT_CREATION: 0.07,
            INTANGIBLES: 0.05,
            SCORING_OUTPUT: 0.04,
          },
          c: {
            SHOT_CREATION: 0.08,
            INTANGIBLES: 0.03,
            SCORING_OUTPUT: 0.04,
          },
          d: {
            SHOT_CREATION: 0.01,
            INTANGIBLES: 0.0,
            SCORING_OUTPUT: 0.08,
          },
          e: {
            SHOT_CREATION: 0.02,
            INTANGIBLES: 0.02,
            SCORING_OUTPUT: 0.02,
          },
        },
      },
      {
        id: "legacy_championship_impact",
        text: "When evaluating a player's legacy how much weight should their impact on the NBA championships they won carry?",
        options: {
          a: "A lot (Championships are the ultimate measure of greatness regardless of individual contributions)",
          b: "Moderate  (Championships matter but should be balanced with individual skills and consistency)",
          c: "Low (Championships depend too much on teammates and circumstance to be weighted heavily)",
          d: "It depends (Era, team context and role affect how championships should be valued)",
        },
        effects: {
          a: {
            __NARRATIVE_TAGS__: ["believes championships are very important but the role you played in getting it is equally"],
          },
          b: {
            __NARRATIVE_TAGS__: ["believes championships are important and bigger roles count more "],
          },
          c: {
            __NARRATIVE_TAGS__: ["believes championships are very hard and everybody's role carries a lot of weight"],
          },
          d: {
            __NARRATIVE_TAGS__: ["believes context needs to be front and center when examining championships"],
          },
        },
      },
      {
        id: "officiating_influence",
        text: "To what extent do you think a player's style of play and overall impact influence how they are officiated or treated by the league?",
        options: {
          a: "Significantly (Style and impact shape favorable or unfavorable treatment)",
          b: "Moderately (These factors matter but officials aim for consistency)",
          c: "Minimally (Officiating is largely impartial regardless of player)",
          d: "It depends on era, player personality, and media narratives",
        },
        effects: {
          a: {},
          b: {},
          c: {},
          d: {},
        },
      },
      {
        id: "opponent_quality_importance",
        text: "When assessing a player's greatness, how important is the quality of opponents they face in different situations?",
        options: {
          a: "Very important (Beating top talent in playoffs and regular season defines greatness)",
          b: "Somewhat important (Opponent quality matters but should be balanced with other factors)",
          c: "Less important (A truly great player dominates regardless of who they face)",
          d: "It depends (Era, team context, and game situation affect how opponent strength should be weighted)",
        },
        effects: {
          a: {},
          b: {},
          c: {},
          d: {
            __ARCHETYPE__: { context: 1 },
          },
        },
      },
      {
        id: "offensive_system_influence",
        text: "How much should a player's offensive system influence how we evaluate their production and efficiency?",
        options: {
          a: "A lot (System, role, and usage heavily shape stats and shot quality)",
          b: "Some (Great players transcend systems, but context still matters)",
          c: "Very little (Production should stand on its own regardless of system)",
          d: "It depends (Era, roster construction, and offensive philosophy all matter)",
        },
        effects: {
          a: {},
          b: {},
          c: {},
          d: {},
        },
      },
      {
        id: "formal_accolades_influence",
        text: "How much should formal accolades influence how a player's career is evaluated?",
        options: {
          a: "Championships and major awards should heavily influence evaluation",
          b: "Accolades matter, but should be balanced with on-court impact",
          c: "Accolades provide context, but skill and play matter more",
          d: "Accolades should have minimal influence; evaluation should focus on performance",
        },
        effects: {
          a: {
            ACCOLADES: 0.08,
          },
          b: {
            ACCOLADES: 0.06,
          },
          c: {
            ACCOLADES: 0.02,
          },
          d: {
            ACCOLADES: 0.0,
          },
        },
      },
      {
        id: "sustained_excellence_importance",
        text: "How important is sustained excellence over many seasons when evaluating a player?",
        options: {
          a: "Extremely important (Maintaining a high level over many years is a major)",
          b: "Important (Longevity matters, but peak performance matters more)",
          c: "Slightly important (Long careers are valuable, but impact matters most)",
          d: "Not very important (Greatness is defined by peak ability, not duration)",
        },
        effects: {
          a: {
            ACCOLADES: 0.08,
          },
          b: {
            ACCOLADES: 0.06,
          },
          c: {
            ACCOLADES: 0.02,
          },
          d: {
            ACCOLADES: 0.0,
          },
        },
      }
      
  ];
  