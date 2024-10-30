# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [:)](https://app.netlify.com/sites/tiny-crostata-2da291/overview)

## My process


### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Tailwindcss](https://tailwindcss.com/) - CSS Framework
- [Vite](https://vite.dev/) - Vite is a blazing fast frontend build tool powering the next generation of web applications.
- [Headless UI](https://headlessui.com/) - UI components, designed to integrate beautifully with Tailwind CSS.
- [React Hook Form](https://react-hook-form.com/) - React Hook Form is a library that helps developers build and manage complex forms in React apps
- [React Router](https://reactrouter.com/en/main) - Simplifies navigation in your web applications, keeping the URL and UI in sync.
- [Zustand](https://github.com/pmndrs/zustand) - Bear necessities for state management in React.


### What I learned

I've never worked with Figma before, but it's an awesome tool. Although at first, I didn't know how to use it, once I watched a YouTube video, I was able to set it up. Having everything you need in one file saves you a lot of time, and being able to see every part of the project in detail and not just guessing the font sizes, styles, width, or height is very helpful.

With this tool, I was able to spend more time coding and focusing on every possible detail of the project. It was really fun and challenging to do and sometimes stressful.

One of the most challenging parts of the project for me was the mobile menu because in the Header component I use two navigations: one for smaller devices and the other one for desktop. I'm not sure if this is right, but it was an easier solution.

Instead of creating a component or view for each category (headphones, speakers, earphones) and taking advantage of the URL params, I decided to create a single view and, using the useEffect Hook, once the component was ready, I could display the products of that category. I made this decision because I thought it wasn't necessary to repeat the same code for three different views, only changing the function that fetches the products. But again, I'm not sure if this solution is right.

Additionally, I added a few extra things to the project, such as:

A cart counter that indicates to the user how many items are in their cart.
```js
  const cartCounter = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
```
A button that closes the cart.
```html
  <button onClick={closeModal} type="button" className='bg-black text-white py-4 uppercase 
  block text-center tracking-widest w-full cursor-pointer'>Continue shopping</button>
```


## Author

- Frontend Mentor - [@DanVillanueva30](https://www.frontendmentor.io/profile/DanVillanueva30)
-Github - [@DanVillanueva30](https://github.com/DanVillanueva30)


