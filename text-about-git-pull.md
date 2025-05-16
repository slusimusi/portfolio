# How to work with `git pull`

`Git pull` is a command that fetches and download commits from a remote branch into to the local one.
It combines such comands as:

- `git fetch`
- `git merge`

Firstly, the `git fetch` command fetches changes from the server used for the local repository.
Then, the `git merge` command merges them with the locale branch.
Finally, `git pull` create a new merge commit.
`git pull` has several options:

- `git pull origin` – fetches and downloads all branches from the remote repository.
- `git pull origin <remote>` – fetches and downloads only the specified branch.
- `git pull <remote>` – a shorthand for `git fetch <remote>` and `git merge origin/<current-branch>`.
- `git pull origin HEAD` – fetches and downloads the current branch without specifying its name explicitly.
- `git pull --no-commit <remote>` – works like`git pull <remote>`, but skips creating a merge commit.
- `git pull --rebase <remote>` - works like `git pull --no-commit <remote>`, but uses `git rebase` instead of `git merge`.
- `git pull --verbose` - displays detailed information about fetched commits and the merge process.
