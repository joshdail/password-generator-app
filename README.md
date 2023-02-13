# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

I have added a few features/modifications in addition to what is specified in the challenge:

- Additional CSS rules for when forced-colors mode is active
- The password strength meter calculates strength as you set the password options, so you know the password's strength level before generating it
- The "Generate" button is disabled if the character length is 0 or if none of the checkboxes are checked
- Instead of the word "Copied" showing beside the clipboard button (which could overrun or be overran by a long password), a toast notification is displayed onscreen when the password is copied

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Typescript
- [Vite](https://vitejs.dev/)

### What I learned

By far the most difficult part of the project was styling the inputs, particularly the range input, because of the way they are implemented in web browsers. The links in the Useful Resources were very helpful, although I still ran into some difficulties styling the progress section of the range input.

### Useful resources

Formula for calculating password strength

- [Subham Datta at Baeldung](https://www.baeldung.com/cs/password-entropy)
- [Walt Powell on Linkedin](https://www.linkedin.com/pulse/math-based-approach-password-strength-walt-powell-cissp-cism?trk=public_profile_article_view)

Styling the range input (slider bar)

- [CSS Tricks](https://https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [tomisloading on TikTok](https://www.tiktok.com/@tomisloading/video/7197443251522063659)

Styling the custom checkboxes

- [Stephanie Eckles at Modern CSS](https://moderncss.dev/pure-css-custom-checkbox-style/)

## Author

- Github - [joshdail](https://www.github.com/joshdail)
- Frontend Mentor - [@joshdail](https://www.frontendmentor.io/profile/joshdail)
