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

## Class File Structure and Format

Class files should follow a consistent structure based on the established pattern. Use the guillotine-defense-class.md as the reference format:

### Class Header Format
```markdown
# [Class Name] Class
**Class Length:** 1 hour

[Brief description of class focus and learning objectives]

This class consists of several progressive drills that build upon each other. Each drill is available as an individual game file for reference.

1. [Game 1 Name](link)
2. [Game 2 Name](link)
3. [Game 3 Name](link)
...

**Total Drilling Time:** [X] minutes
- [Section 1] Drills: [X] minutes
  - [Game 1]: 6 minutes (2 x 3-minute rounds)
  - [Game 2]: 6 minutes (2 x 3-minute rounds)
- [Section 2] Drills: [X] minutes
  - [Game 3]: 6 minutes (2 x 3-minute rounds)
  - [Game 4]: 6 minutes (2 x 3-minute rounds)
```

### Drill Section Format
Use numbered sections (1.1, 1.2, 2.1, 2.2, etc.) instead of descriptive names:

```markdown
## [Section Name] Drills

### 1.1 - [Game Name](link)

**Overview:** Brief description of the drill

**Time:** 3 minutes, 2 partners or 6 minutes total - switching back and forth

#### [Role 1]
**Position:** [Starting position description]  
**Objective:** [What this player should try to accomplish]  
**Win:** [Win condition for this player]

#### [Role 2]  
**Position:** [Starting position description]  
**Objective:** [What this player should try to accomplish]  
**Win:** [Win condition for this player]

### 1.2 - [Next Game Name](link)
[Continue same format...]
```

### Class Conclusion Format
```markdown
## Conclusion
Finish class with Q&A and some live rolling starting from [relevant position]. Focus on applying the [relevant techniques] learned during class, as well as practicing the [relevant concepts] when opportunities arise.
```

### Time Allocation Guidelines
- Each drill should be 6 minutes total (2 x 3-minute rounds with partners switching)
- Total drilling time should typically be 30-36 minutes for a 1-hour class
- Allow remaining time for instruction, Q&A, and live rolling

### Class Consistency Guidelines
1. **Numbering System:** Use decimal numbering (1.1, 1.2, 2.1, 2.2) for drills within sections
2. **Section Names:** Use descriptive section names like "Standing Drills", "Guard Drills", "Pinning Drills"
3. **Time Calculations:** Always show the breakdown of total drilling time by section
4. **Overview Descriptions:** Keep game overviews concise but descriptive
5. **Win Conditions:** Be specific about win conditions, including "No win condition" when appropriate

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