# [PROJECT_NAME] Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

**1. Type Safety First**
   - **Rule:** The `strict` mode in `tsconfig.json` is always enabled.
   - **Rule:** The `any` type is forbidden. Use `unknown` and a type guard when a variable's type cannot be known statically.
   - **Enforcement:** The build will fail on any TypeScript type errors.

**2. Consistent Code Style**
   - **Rule:** All code must be formatted with Prettier and pass all ESLint checks.
   - **Rule:** Naming conventions must be followed strictly: `PascalCase` for types, `camelCase` for variables.
   - **Enforcement:** Git pre-commit hooks and CI pipelines will enforce formatting and linting.

**3. Clear Architecture**
   - **Rule:** Business logic is separated from presentation logic.
   - **Rule:** Code should be organized by feature, not file type, to improve discoverability.
   - **Enforcement:** Pull requests will be rejected if they do not follow the established folder structure.

**4. Clean Dependencies**
   - **Rule:** A dependency on a library should only be added if it is truly necessary.
   - **Rule:** `devDependencies` and `dependencies` must be managed cleanly in `package.json`.
   - **Enforcement:** A dependency review is required for any new library addition.


## Governance
Constitution supersedes all other practices; Amendments require documentation, approval, migration plan


**Version**: 1.0.0 | **Ratified**: 2025-09-16 | **Last Amended**: 2025-09-16
