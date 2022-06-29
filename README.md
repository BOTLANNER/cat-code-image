# b0t-cat-code-image

A cat image component for specific HTTP status codes.

## Example

```html
<b0t-cat-code-image label="Whoopsie" code="401"></b0t-cat-code-image>
```

## Properties

| Property   | Attribute | Modifiers | Type          | Default | Description                      |
|------------|-----------|-----------|---------------|---------|----------------------------------|
| `code`     | `code`    |           | `Number`      | 404     | The code to display an image for |
| `label`    | `label`   |           | `string`      | ""      | Additional text to display.      |
| `override` |           |           |               |         | The element style template.      |
| `styles`   |           | readonly  | `CSSResult[]` |         |                                  |

## CSS Custom Properties

| Property                  | Description       |
|---------------------------|-------------------|
| `--b0t-label-font-family` | Text font family. |
| `--b0t-label-font-size`   | Text font size.   |
| `--b0t-label-font-weight` | Text font weight. |
