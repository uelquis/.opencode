---
name: software-engineering
description: a skill for software engineers. Use when you need to plan or execute the implementation of features and bug fixes or refactoring code.
---

## Conventions

- Bare paths (e.g. `references/guide.md`) resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory (where `SKILL.md` lives).
- `{project-root}` resolves to the root of the project you are working on (where `AGENTS.md` lives).

## On Activation

### Step 1

Check the `{project-root}` for `user-stories.md` and `diagrams.md` files. If they do not exist, infer the user stories and the architecural decisions from `{project/root}/AGENTS.md`.

### Step 2

Read the `{project-root}/user-stories.md` file to understand the requirements and acceptance criteria for the features to be implemented. Then, check the `{project-root}/diagrams.md` file to understand the architecture, design, data models, and other aspects of the system.

### Step 3

Use the information from the `user-stories.md` and `diagrams.md` files to plan and/or implement features, fix bugs, or refactor code as needed. Ensure that your changes align with the requirements and design specifications outlined in these files. If `{project-root}/AGENTS.md` contradicts these files, `{project-root}/user-stories.md` and `{project-root}/diagrams.md` are the source of truth. Don't forget to report the contradiction so the user can address them.

## Guidelines

- always use docstrings to document the code you write
- avoid writing "god classes" or "god functions". Respect the separation of concerns principle.
- complexity and robustness is not always better. Prefer code and architecural simplicity.
- always write testable code.