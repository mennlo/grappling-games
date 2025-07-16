# GitHub Copilot Instructions for Grappling Games Project

This document provides instructions for GitHub Copilot to follow when generating or modifying markdown files for the Grappling Games project. These guidelines ensure consistent structure and formatting across all class and game files.

For detailed file structure and formatting guidelines, please refer to [game-format-guidelines.md](game-format-guidelines.md).

## General Formatting Guidelines

1. Use `#` for main titles, `##` for section headings, and `###` for subsection headings
2. Use double asterisks (`**`) for bold text, especially for field labels
3. Use two spaces at the end of a line to create line breaks within sections
4. Use double line breaks to separate major sections

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

## Game Format Guidelines

## Asymmetric Games (Different Roles for Each Player)
When creating games where players have different roles, positions, and objectives:

### Details Section Format
```markdown
## Details
**Time:** 3 minutes, 2 partners or 6 minutes total - switching back and forth

### Role 1 (e.g., Attacking Player, Bottom Player)
**Position:** [Starting position description]  
**Objective:** [What this player should try to accomplish]  
**Win:** [Win condition for this player]

### Role 2 (e.g., Defending Player, Top Player)
**Position:** [Starting position description]  
**Objective:** [What this player should try to accomplish]  
**Win:** [Win condition for this player]
```

### Instructions Section Format
Instructions should clearly differentiate between what each player should do:
```markdown
## Instructions
1. [Role 1] starts with [specific starting position]
2. [Role 1] works to [achieve objective]
3. [Role 2] tries to [achieve counter-objective]
4. [Specific interactions or transitions]
5. Reset and repeat, switching roles after the predetermined time
```

### Coaching Points Section Format
Separate coaching points for each role:
```markdown
## Coaching Points
For [Role 1]:
- [Tip 1]
- [Tip 2]
- [Tip 3]

For [Role 2]:
- [Tip 1]
- [Tip 2]
- [Tip 3]
```

## Symmetric Games (Same Role for Both Players)
When creating games where both players have the same position, objective, and win conditions:

### Details Section Format
```markdown
## Details
**Time:** 3 minutes, 2 partners or 6 minutes total - switching back and forth

**Position:** [Starting position description]  
**Objective:** [What both players should try to accomplish]  
**Win:** [Win condition for both players]
```

### Instructions Section Format
Instructions should be clear that both players are doing the same thing:
```markdown
## Instructions
1. Both players start [specific starting position]
2. Both players simultaneously work to [achieve objective]
3. [Specific rules or constraints]
4. The first player to achieve their win condition ends the round
5. Reset and repeat for the predetermined time
```

### Coaching Points Section Format
Common coaching points for both players:
```markdown
## Coaching Points
For both players:
- [Tip 1]
- [Tip 2]
- [Tip 3]
- [Tip 4]
```

## Class File Format
The class file should match the format used in the individual game files:

### For Asymmetric Games:
```markdown
### [Section] [Number] - [Game Name](link)

**Overview:** Brief description

**Time:** 3 minutes, 2 partners or 6 minutes total - switching back and forth

#### Role 1
**Position:** [Starting position description]  
**Objective:** [What this player should try to accomplish]  
**Win:** [Win condition for this player]  

#### Role 2
**Position:** [Starting position description]  
**Objective:** [What this player should try to accomplish]  
**Win:** [Win condition for this player]  
```

### For Symmetric Games:
```markdown
### [Section] [Number] - [Game Name](link)

**Overview:** Brief description

**Time:** 3 minutes, 2 partners or 6 minutes total - switching back and forth

**Position:** [Starting position description]  
**Objective:** [What both players should try to accomplish]  
**Win:** [Win condition for both players]  
```

## Naming Conventions

1. File names should use kebab-case (lowercase with hyphens between words)
2. Class files should be named based on the primary guard or position being taught
3. Game files should be named descriptively based on the primary technique or position

## Directory Structure

- Classes: `/classes/guard/[position]/class-name.md`
- Guard Games: `/games/guard/[position]/game-name.md`
- Pinning Games: `/games/pinning/game-name.md`
- Standing Games: `/games/standing/game-name.md`

When generating new files, follow this directory structure and use the appropriate templates as specified above.