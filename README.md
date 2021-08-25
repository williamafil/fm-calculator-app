# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Users is able to:

- Adjust calculator size based on user's browser size
- Perform simple math calculation such as addition, subtraction, division, and multiplication
- User is able to change color scheme
- App automatically detect browser's `prefers-color-scheme`

### Screenshot

![](https://i.imgur.com/TNEAZTM.png)

### Links

- Solution URL: [https://github.com/williamafil/fm-calculator-app](https://github.com/williamafil/fm-calculator-app)
- Live Demo URL: [https://calc-app-lime.vercel.app/](https://calc-app-lime.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind CSS
- ReactJS
- Vite

### What I learned

##### Theme Switcher

I got idea on achieving toggle between three themes from this website. I simply have preset color scheme in tailwind.config.js and setup custom properties in css file. In react App element I bind a custom class 'theme-one' which refers to the custom css properties.

```html
<div id="App" class="theme-one">...</div>
```

```css
/* DARK */
#App.theme-one {
  @apply bg-dark-mainBg h-screen text-dark-text;
}

#App.theme-one .switch-bg {
  @apply bg-dark-switchBg;
}
```

[A Complete Guide to Dark Mode on the Web: Using Custom Properties - CSS Tricks](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#using-custom-properties)

<br/>

##### defaultValue vs value

> In React, defaultValue is used with uncontrolled form components whereas value is used with controlled form components. ... They should not be used together in a form element.

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

- Key press detection. User is able to insert numbers and operators using keyboard
- Solve decimal problem

### Useful resources

- [A Complete Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#using-custom-properties) - This helped me for dark/light mode.
- [Detecting Dark Mode with Javascript](https://usefulangle.com/post/318/javascript-check-dark-mode-activated) - Nice article on detecting prefer-color-scheme using JavaScript

## Author

- Website - [William Kang](https://williamafil.github.io/fm-tip-calculator/)
- Frontend Mentor - [@williamafil](https://www.frontendmentor.io/profile/williamafil)
