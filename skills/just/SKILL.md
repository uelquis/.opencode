---
name: just
description: A command runner that allows you to define and run commands in a simple and organized way.
---

## Conventions

- Bare paths (e.g. `references/guide.md`) resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory (where `SKILL.md` lives).
- `{project-root}` resolves to the root of the project you are working on (where `AGENTS.md` lives).
- Commands must be restricted to the `{project-root}` and its subdirectories. Do not allow commands to run outside of the `{project-root}`.
- Any `justfile` you create must be well-organized and easy to read, with clear and concise command names and descriptions.
- If a command requires specific environment variables or dependencies, make sure to document them clearly in the `justfile`.
- If you use just to create a build system, make sure to document all the relevant aspects clearly in the `justfile`, including any build targets, dependencies, and build steps.

## On Activation

Check the [Just documentation](https://just.systems/man/en/introduction.html) for examples, tutorials and and instructions.

If you find yourself repeating the same commands over and over again, consider using a `justfile` in the `{project-root}` to simplify your workflow. 