# Research for Simple Web Game for Reading

## Performance Goals

- **Decision**: Standard web performance goals will be applied.
- **Rationale**: The application is a simple game for a single user, so there are no specific performance requirements from the user. We will aim for a fast initial load time and smooth animations (60 fps).
- **Alternatives considered**: None.

## Testing

- **Decision**: `jest` will be used as the test runner, and `webpack` will be used to bundle the tests.
- **Rationale**: The user specified `webpack` for testing, which is a module bundler, not a test runner. `jest` is a popular and well-supported testing framework for JavaScript and TypeScript projects and integrates well with webpack.
- **Alternatives considered**: `mocha`, `chai`.
