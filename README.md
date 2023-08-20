# gradientSweep

# A dynamic but subtle effect for inclusion in sites using a standard HTML Canvas.
### Currently in use on my personal site as a header effect. 

## What it does:
- Defines list of colors (list of lists for r, g, b values)
- In setup(), it randomly populates that list with hues skewed in defined g & b ranges to keep a sense of cohesion
- Defines terms for currentColor, targetColor every refresh
- Uses lerpColor in the p5js library to project from current to target
- Updates current/target every 25 frames 
- Updates color list to new randomly generated set every 150 frames
- It can be embedded as an iFrame object or imported natively into an existing DOM tree by including the script file and importing the p5 library in the html header, and adding the script tag where you'd like it to render
