# gradientSweep

# Incomplete! Right now it's just a single panel of color shift, which is sufficient enough to implement.
### This is going to take the place of my WorkingwithAgents as a background for my personalWebsite header

## What it does now:
- Defines list of colors (list of lists for r, g, b values)
- in setup(), it randomly populates that list with hues skewed in confined g & b ranges to keep a sense of cohesion
- Defines terms for currentColor, targetColor
- Uses lerpColor to project from current to target
- Updates current/target every 25 frames 
- Updates color list every 150 frames

## What I want it to do:
- Define diagonal lines that populate full screen width 
- Do this in setup after defining canvas
- Do this by setting (x = width, y = height -/+ 2 for example, then doing for(i = 0; i < width; i++)) to populate screen without knowing width
- Make list of line objects (defined in class to give the angle?)
- Set color to phase change (using currentColor) for each object individually
- This will mean I need to rewrite currentColor, targetColor to update within a for loop in draw() iterating through list of line objects
- Fudge with line stroke until it looks satisfying
