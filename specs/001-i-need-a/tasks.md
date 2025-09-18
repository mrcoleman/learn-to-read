# Tasks: Simple Web Game for Reading

**Input**: Design documents from `/specs/001-i-need-a/`
**Prerequisites**: plan.md, research.md, data-model.md

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)

## Phase 3.1: Setup
- [x] T001 Create project structure (`src`, `tests` directories).
- [x] T002 Initialize npm project (`npm init -y`) and install dependencies (`npm install typescript webpack webpack-cli ts-loader html-webpack-plugin bootstrap jest @types/jest ts-jest html-loader`).
- [x] T003 Configure webpack (`webpack.config.js`).
- [x] T004 Configure TypeScript (`tsconfig.json`).
- [x] T005 Configure Jest (`jest.config.js`).
- [x] T006 Configure Prettier and ESLint.

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [x] T007 [P] Write unit tests for `GameRound` model (`tests/unit/GameRound.test.ts`).
- [x] T008 [P] Write unit tests for `PlayerStats` model (`tests/unit/PlayerStats.test.ts`).
- [x] T009 [P] Write unit tests for `WordList` model (`tests/unit/WordList.test.ts`).
- [x] T010 Write integration test for the main game flow (`tests/integration/game-flow.test.ts`).

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [x] T011 [P] Implement `GameRound` model (`src/models/GameRound.ts`).
- [x] T012 [P] Implement `PlayerStats` model (`src/models/PlayerStats.ts`).
- [x] T013 [P] Implement `WordList` model (`src/models/WordList.ts`).
- [x] T014 Implement the main game logic (`src/services/GameService.ts`).
- [x] T015 Implement the Start screen UI (`src/views/start-screen.html` and `src/views/start-screen.ts`).
- [x] T016 Implement the Game Play screen UI (`src/views/game-screen.html` and `src/views/game-screen.ts`).
- [x] T017 Implement the Success screen UI (`src/views/success-screen.html` and `src/views/success-screen.ts`).
- [x] T018 Implement the Game Over screen UI (`src/views/game-over-screen.html` and `src/views/game-over-screen.ts`).
- [x] T019 Implement the main entry point of the application (`src/main.ts`).

## Phase 3.4: Integration
- [x] T020 Integrate the `GameService` with the UI components.
- [x] T021 Create the main `index.html` file that will host the game.

## Phase 3.5: Polish
- [x] T022 Add placeholder animations.
- [x] T023 Add audio clips for the words.
- [x] T024 Style the UI using Bootstrap.
- [x] T025 Final review and code cleanup.

## Dependencies
- Tests (T007-T010) before implementation (T011-T019)
- Models (T011-T013) before services (T014)
- Services (T014) before UI (T015-T018) and main entry point (T019)
- Core implementation before integration (T020-T021)
- Everything before polish (T022-T025)

## Parallel Example
```
# Launch T007-T009 together:
Task: "Write unit tests for GameRound model (tests/unit/GameRound.test.ts)"
Task: "Write unit tests for PlayerStats model (tests/unit/PlayerStats.test.ts)"
Task: "Write unit tests for WordList model (tests/unit/WordList.test.ts)"
```