Scissors Paper Rock

This Project is to create scissors paper rock against a computer in JS.
This has been done for a Odin Project Project.
  Please see The Odin Project for your chance to learn this.
    https://www.theodinproject.com/

*Goal*
The goal is to be able to play a first to 3 scissors paper rock game against a computer.

*Pseudo code*
Get a username

set scores to 0

While both computer and user wins are < 3

  FUNCTION
  generate a computer choice
    Generate a random value between 1 and 3
    assign this to scissors, Paper or Rock
  
  FUNCTION
  Have the user enter a choice
    Prompt for entry
    validate this choice
      Trim it
      Check that it is not capital in random spots
      check that is one of the 3 correct choices
  
  FUNCTION
  Compare user choice against computer choice
    if same call a draw, restart
    
    if user scissors and computer paper
      user win
    if user scissors and computer rock
      computer win
    if user paper and computer scissors
      computer win
    if user paper and computer rock
      user win
    if user rock and computer paper
      computer win
    if user rock and computer scissors
      user win

  FUNCTION  
  Winner gets displayed on the screen
  winner gets ++ win score

  display current rounds score

When the loop breaks
  Check if user or computer is >
  display winner



