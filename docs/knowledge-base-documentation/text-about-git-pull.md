---
description: Test task for Mercurio company
---

# Git pull command

:::info
<p>**About this sample**: This article explains how the `git pull` command works.</p>
<p>**Goal**: Explain the command concepts to a general audience.</p>
<p>**Result**: The documentation met all requirements.</p>
<p>**Evolution**: I created the original content as a time-boxed test task in Russian. Later, I translated the text in English and refined it to align with STE principles for better clarity and conciseness.</p>
:::

## Overview

`Git pull` is a command that fetches and download commits from a remote branch into to the local one.
It combines comands `git fetch` and `git merge`.

The general flow is:

1. `git fetch` fetches changes from the server used for the local repository.
1. `git merge` merges them with the locale branch.
1. `git pull` creates a new merge commit.

## Options

`git pull` has several options:

- `git pull origin` – fetches and downloads all branches from the remote repository.
- `git pull origin <remote>` – fetches and downloads only the specified branch.
- `git pull <remote>` – a shorthand for `git fetch <remote>` and `git merge origin/<current-branch>`.
- `git pull origin HEAD` – fetches and downloads the current branch without specifying its name explicitly.
- `git pull --no-commit <remote>` – works like`git pull <remote>`, but skips creating a merge commit.
- `git pull --rebase <remote>` - works like `git pull --no-commit <remote>`, but uses `git rebase` instead of `git merge`.
- `git pull --verbose` - displays detailed information about fetched commits and the merge process.<br/>

:::note
The year of writing is 2021.
:::
