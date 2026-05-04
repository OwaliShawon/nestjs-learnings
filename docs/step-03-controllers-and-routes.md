# Step 03: Controllers & Routes

## Goal
Create controllers and define HTTP routes.

## What is a controller?
Controllers handle incoming requests and return responses.

## Create a controller
```bash
nest g controller cats
```

## Example controller
See: `examples/step-03-controllers/`

## Basic routing
```ts
@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return ['Tom', 'Mimi'];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
```

## Exercises
- Add a `POST /cats` route.
- Add a `DELETE /cats/:id` route.
