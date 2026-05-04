# Step 02: Setup & Install

## Goal
Install NestJS and understand the project structure.

## Install Nest CLI
```bash
npm i -g @nestjs/cli
```

## Create a project
```bash
nest new hello-nest
```

## Run the app
```bash
cd hello-nest
npm run start:dev
```

## Key files (generated)
- `src/main.ts` — app bootstrap
- `src/app.module.ts` — root module
- `src/app.controller.ts` — example controller
- `src/app.service.ts` — example provider

## Example (minimal controller)
See: `examples/step-02-hello-nest/`

## Exercises
- Create a new Nest project.
- Change the root route response to your own message.
