# Grappling Games

This repository contains examples of games and exercises designed for grappling training. The collection aims to provide a variety of drills and activities that can be incorporated into grappling practice sessions.

## Website

The games and classes are available as a website at [https://mennlo.github.io/grappling-games/](https://mennlo.github.io/grappling-games/).

## Repository Structure

- `/games/` - Individual grappling drills and games organized by position
- `/classes/` - Complete class plans that incorporate multiple games
- `/assets/` - CSS, JavaScript, and other resources for the website

## How to Contribute

### Adding a New Game

1. Identify which category your game belongs in (e.g., `guard/passing`, `standing`, etc.)
2. Create a new Markdown file in the appropriate directory following the naming convention: `descriptive-game-name.md`
3. Use the template below for your game content:

```markdown
# Game Title
**Class Length:** 1 hour

## Overview
A brief description of the game and its purpose.

## Details
**Time:** [Duration] minutes, [Number of participants] partners - [switching/continuous]

### Top Player
**Position:** Description of starting position
**Objective:** What the top player is trying to achieve
**Constraints:** Any limitations or rules
**Win:** How the top player wins

### Bottom Player
**Position:** Description of starting position
**Objective:** What the bottom player is trying to achieve
**Constraints:** Any limitations or rules
**Win:** How the bottom player wins

## Instructions
1. Step-by-step instructions for the game
2. Be clear and concise
3. Include key transitions or changes

```

### Adding a New Class

1. Identify which category your class belongs in (e.g., `guard/passing`, `submissions`, etc.)
2. Create a new Markdown file in the `/classes/` directory following the naming convention: `descriptive-class-name.md`
3. Use the template below for your class content:

```markdown
# Class Title

This class consists of several progressive drills that build upon each other. Each drill is available as an individual game file for reference.

1. [Game 1 Name](https://mennlo.github.io/grappling-games/md-viewer.html?file=games/category/game-name.md)
2. [Game 2 Name](https://mennlo.github.io/grappling-games/md-viewer.html?file=games/category/game-name.md)
3. [Game 3 Name](https://mennlo.github.io/grappling-games/md-viewer.html?file=games/category/game-name.md)

## Section 1 Title

### Game 1 - [Game 1 Name](https://mennlo.github.io/grappling-games/md-viewer.html?file=games/category/game-name.md)

**Overview:** Brief description

**Time:** Duration, participants, format

#### Role 1 (e.g., Top Player)
**Position:** Starting position description
**Objective:** What they're trying to achieve
**Constraints:** Any limitations
**Win Condition:** How they succeed

#### Role 2 (e.g., Bottom Player)
**Position:** Starting position description
**Objective:** What they're trying to achieve
**Constraints:** Any limitations
**Win Condition:** How they succeed

[Continue with additional games...]

## Conclusion

Any closing notes or additional instructions.
```

### URL Format for Linking Games

When linking to games within your Markdown files, use the GitHub Pages URL format:

```
https://mennlo.github.io/grappling-games/md-viewer.html?file=games/category/game-name.md
```

Replace `category` with the appropriate folder path and `game-name.md` with the actual filename.

