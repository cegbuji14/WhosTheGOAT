Product Document

1. Product Overview
Name: GOAT
Description: A question that is sure to rile up sports fans of any age is who is the greatest of all time? LeBron James, Michael Jordan, Kobe Bryant, Bill Russell, Kareem..the list goes on and on. 
The reason being is because your answer is subjective. As we know, stats and accolades do not always give an accurate depiction of one’s greatness. 
What GOAT does is take some of your basketball values and perspectives and finds the player who most aligns with your personal views on the game. Not just who you believe is the best based on their readily available stats
or who you believe you can make the easiest compelling argument for.

2. Key Features
Feature 1: Takes user's answers and based on their choices gives certain point increments for different attribute categories and different archetypes.
Feature 2: Projects user's answers to a range comparable to the NBA player ratings.
Feature 3: Compares distance from user's attribute/archetype preferences turned ratings to player's ratings.

3. Target Users
The app is currently for NBA fans. In the future it could be used for other sports fans or for any field where people can make cases in favor of someone who is not as highly decorated.

4. Technology Stack
C++17, VSCode, clang++, lldb, macOS, git and github

5. User Flow
-User launches app.
-Greeted by main menu screen
-Answers questionaire
-Receives player comparisons

6. Future Enhancements
-Node.js implementation
-More weighted questions 
-Access to NBA stats that allow for more accurate numbers and weighted questions.
-Much larger player database to choose from (30 players minimum in Node version for much larger pool)


7. Deployment and Hosting
This program (c++) is compiled into a local executable file using clang++. The executable is run directly on user machine. Source code is hosted on GitHub for version control and sharing.

8. Known Issues or Limitations
-Will optimize filing style for Node.js version (Make header files and consolidate any code to make easier to read)
-Add the other player Archetype flags + players, not just the test players in the current c++ program. Potentially tell the user about how they view the game using archetype flags.
-Only 5 players currently, will use json for all players in Node.js
-Not an issue but will remove logs in future. Players with very high ratings may not be paired correctly if questions do not give enough chances for increments to be near when they are normalized. Also need to add cases for if user enters an invalid answer choice


