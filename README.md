# Module Project: Context API - Shopping Cart

In this module you will take your newfound knowledge of `Context API` and refactor a e-commerce store to use `Context API` as well as extend the functionality of the application making it more robust!

## Instructions

Read these instructions carefully. Understand exactly what is expected _before_ starting this project.

## Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

## Description

In this project you'll take take an existing e-commerce store and refactor the application to use the `Context API`.

# Project - Shopping Cart

## Directions

Before you get started, please take a few minutes and get acquainted with this application. Understand what's going on and how it's working.

[x] If you look in the `App.js` you'll notice there are currently two state properties - `products` to keep track of all available products, and `cart` that will keep track of all the items in our `cart`.

[x] You'll also notice inside of our `App.js` we have 3 components. A navigation component and two route based components. Each of those components are all being passed either our `cart` state or `product` state as props, when we start to scale our application and add more props our codebase is going to start to become very cumbersome and will make our application hard to work with.

- To combat this from happening we're going to refactor our application to use `Context API`, making it easier and more effiecent to access data across our application.

**STEP 1 - Creating ProductContext**

[x] In `src`, create a new folder named `contexts`, this folder is going to be used to hold all of `context objects` we create.

[x] Inside that folder create a new file named `ProductContext.js`

[x] In this file, import the `createContext` function from the react library and create our `ProductContext`.

**STEP 2 - Providing data with ProductContext**

[x] Now that we've created our `ProductContext` we can import into our `App.js`. Now we can start providing data across our application!

[x] Wrap all of your components/routes in `App.js` inside of `ProductContext.Provider` component.

[x] Next pass a value prop to your `Provider`.

[x] In the value prop we'll pass in the products state, and an addItem function that will allow us to add books to the cart.

```js
<ProductContext.Provider value={{ products, addItem }}>
```

[x] Now that we're providing our products state and addItem function we can refactor our products route to no longer use render props.

**Before**

```js
<Route
  exact
  path="/"
  render={() => <Products products={products} addItem={addItem} />}
/>
```

**AFTER**

```js
<Route exact path="/" component={Products} />
```

[x] After refactoring you'll notice a few errors... Don't worry we'll clean those up shortly!

**STEP 3 - Consuming data with ProductContext**

[x] Now that our `ProductContext` is now providing data we can finally consume it! To do so let's head over to our `Products` component and import the `useContext` hook as well as our `ProductContext`.

[x] In the component, call the `useContext` hook and pass in the context object we want to use into it.

[x] When we do this, `useContext` is going to return value passed by our `ProductContext` Provider `value` prop. In our case we're getting back an object with two properties. A `products` property and a `addItem` property. We can go ahead and destructure those.

```js
const { products, addItem } = useContext(ProductContext);
```

[x] Now that we have all of the data we need we can refactor our `Products` component from using props.

[x] To do so we just need to remove every instance of `props`.

- Remove it from the function parameters
- Remove it from the products map
- Remove it from addItem prop

- Now our `Products` component is getting it's data solely from `Context API` 😃.

**STEP 4 - Create the CartContext**

[x] Now that we have refactored our `Products` component to utilize `Context API` let's refactor our `Cart` and `Navigation` Component to use `Context API` as well.

-[x] To start create a new file in our contexts folder named `CartContext.js`, this context is going to be utilized by our `ShoppingCart` and `Navigation` component.

[x] Inside of our new `CartContext` import `createContext` and create a new context named `CartContext`.

**STEP 5 - Providing data with CartContext**

[x] Let's go ahead and bring our newly created `CartContext` into our `App.js` and wrap all of our components inside of our `CartContext.Provider`. Make sure our `ProductContext.Provider` is still the root provider.

[x] Now pass a value prop to our `CartContext.Provider`, this value prop is going to contain our `cart` state.

[x] Now that we're providing our cart data, we can start to refactor our `Navigation` and `ShoppingCart` components.

[x] Let's start with our `ShoppingCart` component first. Go ahead and refactor the `ShoppingCart` route to no longer use render props. This will throw us an error, but we'll be able to resolve it quickly.

[x] While were at it let's go ahead and remove the props from our navigation as well.

**STEP 6 - The final stretch**

[x] Our cart data is now being provided to us from our `CartContext` time to consume it!

[x] First, let's head to our `ShoppingCart` component and import the `useContext` hook and our `CartContext`.

[x] Now in the component, pass `CartContext` to the `useContext` hook and assign it to a variable named cart.

[x] Inside of our component we now need to remove all instances of props.

- Remove the `props` parameter
- Remove the `props` portion in our `getCartTotal` function
- Remove `props` when we're mapping over our cart

[x] Time to do the same thing for our `Navigation` component.

- First import the `useContext` hook and our `CartContext`
- Next, pass our `CartContext` to the `useContext` hook and assign it to a variable named cart.
- Lastly we need to remove all instances of `props`
  - Remove `props` from our parameters
  - Remove `props` from our cart length

We have now successfully converted our application into using `Context API` 🔥

## _MVP Requirements:_

[x] Create a `ProductContext` and a `CartContext`
[x] Use the Provider Component from `ProductContext` and `CartContext` to provide data to child components
[x] Consume data using the `useContext` hook from `ProductContext` and `CartContext`

## Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

- Create a `removeItem` function that allows you to remove an item from your cart with a click of a button. This `removeItem` function should be able to be consumed from your `ShoppingCartItem` component.
  Remember each item has an `id` this will help out a lot while creating your removeItem function!

- Persist Cart Items using `localStorage`. (If you try this one, it will be a bit tricky to get our items to populate the shopping cart on a refresh. You'll have to think about where the data actually lives, and how you can get data there from localStorage when the app is being mounted after a refresh. Good luck!)
