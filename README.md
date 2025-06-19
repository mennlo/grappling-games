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

## Contributing on GitHub

### Creating a New File in the GitHub Web Interface

1. **Navigate to the Repository**
   - Go to [https://github.com/mennlo/grappling-games](https://github.com/mennlo/grappling-games)
   - Make sure you're logged into your GitHub account

2. **Navigate to the Appropriate Directory**
   - Browse to the directory where you want to create a file
   - For a new game, navigate to `/games/` and then to the appropriate category
   - For a new class, navigate to `/classes/` and then to the appropriate category

3. **Create the New File**
   - Click the "Add file" dropdown button and select "Create new file"
   - Name your file (e.g., `my-new-game.md`)
   - Add the content following the templates provided above

4. **Create a Branch and Propose the Change**
   - Scroll to the bottom of the page
   - Select "Create a new branch for this commit and start a pull request"
   - Name your branch something descriptive (e.g., `add-new-guard-game`)
   - Click "Propose new file"

   ![Creating a new file](https://docs.github.com/assets/cb-67313/images/help/repository/new-file-commit-message.png)

5. **Complete the Pull Request**
   - Add a title and description explaining your contribution
   - Click "Create pull request"

### Editing Existing Files in the GitHub Web Interface

1. **Navigate to the File**
   - Browse to the file you wish to edit in the repository

2. **Edit the File**
   - Click the pencil icon (Edit this file) in the upper right of the file view
   - Make your changes in the editor

3. **Commit Changes and Create a Pull Request**
   - Scroll to the bottom of the page
   - Add a descriptive commit message (e.g., "Fix typo in game description")
   - Select "Create a new branch for this commit and start a pull request"
   - Name your branch appropriately (e.g., `fix-typo-in-game`)
   - Click "Propose changes"

   ![Editing a file](https://docs.github.com/assets/cb-20363/images/help/repository/edit-file-commit-message.png)

4. **Complete the Pull Request**
   - Add additional details about your changes if needed
   - Click "Create pull request"

### Making Multiple File Changes in One PR

1. **Create Your First Change**
   - Follow the steps above to create or edit your first file
   - When creating the branch, use a name that reflects your overall changes

2. **Navigate to Add More Files**
   - After creating your first change, you'll be on your branch
   - To add more changes, navigate to where you want to add or edit another file

3. **Commit Additional Changes to the Same Branch**
   - Make your edits
   - When committing, select "Commit directly to the [your-branch-name] branch"
   - Click "Commit changes"

4. **Submit the Pull Request When Finished**
   - When you've made all your changes, you may already have a PR open
   - Any additional commits you make to your branch will automatically be included in that PR
   - If you haven't created a PR yet, go to the "Pull requests" tab
   - Click "New pull request" and select your branch to compare with main

### Making Changes After Creating a Pull Request

1. **Navigate Back to Your Branch**
   - Go to the repository's "Code" tab
   - Use the branch dropdown to select your working branch

2. **Make Additional Changes**
   - Edit or add files as needed
   - Commit these changes directly to your branch
   - The pull request will automatically update with your new changes

