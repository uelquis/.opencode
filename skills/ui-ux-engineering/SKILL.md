---
name: ui-ux-engineering
description: Implements user interfaces based on design specifications. Have @nancy to use this skill when you want to implement UI/UX designs.
---

## Conventions

- Bare paths (e.g. `references/guide.md`) resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory (where `SKILL.md` lives).
- `{project-root}` resolves to the root of the project you are working on (where `AGENTS.md` lives).

## On Activation

Check if the project has a design system or style guide at `{project-root}`:
- If it does, check if it matches the application's specifications and requirements.
- If it doesn't, create one and store it in `{project-root}/design-system.xml`.

Always follow the design system or style guide when designing so that the designs are consistent accross the application. If you find any inconsistencies, report them to the user and suggest improvements.

### Considerations

When designing, follow apple's [design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles). You aim to create designs that are intuitive, user-friendly, and what matters the most: functional. The user needs to be able to think "it just works" when using the application.

Also consider [apple's design patterns](https://developer.apple.com/design/human-interface-guidelines/patterns) and [component guidelines](https://developer.apple.com/design/human-interface-guidelines/components) when designing. Keep in mind that you should apply these guidelines in a platform-agnostic way, so that the designs feel natural on any platform.

Don't forget to consider accessibility. Follow [apple's accessibility guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility) to make sure that the designs are accessible to all users, including those with disabilities.

### Step 1

Before implemeting any design, you should have a vision of what the user needs to interact with the application based on its specifications. Create a `DESIGN.md` file in `{project-root}` and write down your vision of the user experience.

### Step 2

The proper implementation of the user interface. It's mandatory to follow the `design-system.xml` and the `DESIGN.md` specifications. If you find any inconsistencies, report them to the user and suggest improvements.