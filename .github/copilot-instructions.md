# GitHub Copilot Instructions for Grappling Games Project

This document provides instructions for GitHub Copilot to follow when generating or modifying markdown files for the Grappling Games project. These guidelines ensure consistent structure and formatting across all class and game files.

## General Formatting Guidelines

1. Use `#` for main titles, `##` for section headings, and `###` for subsection headings
2. Use double asterisks (`**`) for bold text, especially for field labels
3. Use two spaces at the end of a line to create line breaks within sections
4. Use double line breaks to separate major sections

## Class File Structure (.md files in /classes/ directory)

Class files should follow this structure:

```markdown
# [Name of Class] Class
**Class Length:** 1 hour

This class consists of several progressive drills that build upon each other. Each drill is available as an individual game file for reference.

1. [Game Name 1](https://mennlo.github.io/grappling-games/md-viewer.html?file=games/path/to/game1.md)
2. [Game Name 2](https://mennlo.github.io/grappling-games/md-viewer.html?file=games/path/to/game2.md)
3. [Game Name 3](https://mennlo.github.io/grappling-games/md-viewer.html?file=games/path/to/game3.md)
...

## [Section Type] Drills

### [Section Type] 1 - [Game Name 1](https://mennlo.github.io/grappling-games/md-viewer.html?file=games/path/to/game1.md)

**Overview:** Brief description of the drill.

**Time:** 3 minutes, 2 partners or 6 minutes total - switching back and forth

#### [Player Role]
**Position:** Starting position description  
**Objective:** What the player should try to accomplish  
**Constraints:** Any limitations on actions (optional)  
**Win:** Win condition

#### [Other Player Role]
**Position:** Starting position description  
**Objective:** What the player should try to accomplish  
**Constraints:** Any limitations on actions (optional)  
**Win:** Win condition

**Instructions:**
1. Step 1
2. Step 2
3. Step 3
4. Step 4
```

## Game File Structure (.md files in /games/ directory)

Game files should follow this structure:

```markdown
# [Game Name]

## Overview
Brief description of the game or drill.

## Details
**Time:** 3 minutes, 2 partners or 6 minutes total - switching back and forth  

### [Player Role]
**Position:** Starting position description  
**Objective:** What the player should try to accomplish  
**Constraints:** Any limitations on actions (optional)  
**Win:** Win condition

### [Other Player Role]
**Position:** Starting position description  
**Objective:** What the player should try to accomplish  
**Constraints:** Any limitations on actions (optional)  
**Win:** Win condition

## Instructions
1. Step 1
2. Step 2
3. Step 3
4. Step 4

## Coaching Points
For [player role]:
- Coaching tip 1
- Coaching tip 2
- Coaching tip 3

For [other player role]:
- Coaching tip 1
- Coaching tip 2
- Coaching tip 3
```

## Time Format Standard

Always format time specifications as this unless told otherwise:
`**Time:** 3 minutes, 2 partners or 6 minutes total - switching back and forth`

## GitHub Pages URLs Format

When linking to game files from class files, always use the format:
`https://mennlo.github.io/grappling-games/md-viewer.html?file=games/path/to/game-file.md`

## Position, Objective, Constraints, Win Format

Always list these fields in order:
1. **Position:** (always required)
2. **Objective:** (always required)
3. **Constraints:** (don't include even if empty)
4. **Win:** or **Win Condition:** (always required)

Each field should be on its own line with two trailing spaces for line breaks.

## Naming Conventions

1. File names should use kebab-case (lowercase with hyphens between words)
2. Class files should be named based on the primary guard or position being taught
3. Game files should be named descriptively based on the primary technique or position

## Directory Structure

- Classes: `/classes/guard/[position]/class-name.md`
- Guard Games: `/games/guard/[position]/game-name.md`
- Pinning Games: `/games/pinning/game-name.md`
- Standing Games: `/games/standing/game-name.md`

When generating new files, follow this directory structure and use the appropriate templates above.