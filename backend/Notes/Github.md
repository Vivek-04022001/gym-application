# Git Commands

## Here's some beginner-level information about Git and GitHub:

1. Version Control:

   - Git is a version control system that tracks changes in your code over time.
   - It allows multiple people to work on the same project without conflicts.

2. Repositories:

   - A repository (repo) is a project's folder containing all files and their revision history.
   - Local repo: On your computer
   - Remote repo: On GitHub's servers

3. Basic Workflow:

   - Make changes to your files
   - Stage changes (git add)
   - Commit changes (git commit)
   - Push to remote (git push)

4. Branches:

   - Branches allow you to work on different versions of your project simultaneously.
   - The main branch is often called "main" or "master".

5. GitHub:

   - GitHub is a web-based platform that uses Git for version control.
   - It provides additional features like pull requests, issue tracking, and project management tools.

6. Cloning and Forking:

   - Cloning: Creating a local copy of a repository
   - Forking: Creating your own copy of someone else's repository on GitHub

7. Pull Requests:

   - A way to propose changes to a repository
   - Used for code review and merging changes from one branch to another

8. .gitignore:

   - A file that tells Git which files or folders to ignore in a project

9. README.md:

   - A markdown file that describes your project, how to set it up, and how to use it

10. Commits:
    - A commit is a snapshot of your repository at a specific point in time
    - Each commit has a unique identifier and a message describing the changes

## Important Commands

Here are some important Git commands along with key points to understand about each:

```bash
git init
git clone <repository-url>
git add <file>
git commit -m "Commit message"
git push origin <branch-name>
git pull origin <branch-name>
git branch
git checkout <branch-name>
git merge <branch-name>
git status
git log
git diff
```

Key points to understand:

1. `git init`: Initializes a new Git repository in the current directory.

2. `git clone`: Creates a copy of a remote repository on your local machine.

3. `git add`: Stages changes for commit. Use `git add .` to stage all changes.

4. `git commit`: Records staged changes to the repository. Always include a meaningful commit message.

5. `git push`: Uploads local commits to a remote repository.

6. `git pull`: Fetches changes from a remote repository and merges them into your current branch.

7. `git branch`: Lists, creates, or deletes branches. Use `-d` flag to delete a branch.

8. `git checkout`: Switches between branches or restores files. Use `-b` flag to create and switch to a new branch.

9. `git merge`: Combines changes from different branches.

10. `git status`: Shows the current state of your working directory and staging area.

11. `git log`: Displays commit history. Use `--oneline` for a condensed view.

12. `git diff`: Shows differences between commits, branches, files, etc.
