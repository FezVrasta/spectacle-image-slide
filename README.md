# Spectacle ImageSlide

Create a slide with a big caption and an image as large as possible to fit
the available screen size.

## Usage

```jsx
const Presentation = () =>
  <Deck transition={[]} transitionDuration={0} progress="bar">
    <Slide transition={[]}>
      <ImageSlide image={demoImage} title="ImageSlide demo!" />
    </Slide>
  </Deck>
```
