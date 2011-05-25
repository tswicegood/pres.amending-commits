Amending Commits
================
This repository is useful for demonstrating how an amended
commit works.  The first real commit has a typo in it.  You
can fix the code, then use `git commit --amend` to fix it
like this after staging the commit:

    prompt> git commit -c HEAD --amend

This launches the editor with the previous commit message
already preloaded.  You can also use `-C` to use the commit
message as-is without launching the editor.
