<h1 align="center">
Using-Redux-with-React
</h1>

<h1 align="center">
Integrating Redux into a React app
</h1>

Steps to integrate Redux into an existing React app are

Setup up Redux

    * Install the redux npm packages
    * Define your actions
    * Define your reducers
    * Create your store

Update components

    * use store.subscribe to listen for store updates
    * call store.getState to retrive state for rendering
    * call store.dispatch to dispatch actions to the store

Note: You'll start with writing all of the code to interact with the store within each component that needs to render state from the store or to dispatch actions.

<h1 align="center">
Organizing your Redux Code
</h1>

Instead of placing all of your Redux related code into a single file, you'ss seperate your store, reducer and actions into their own file.

It might be better to seperate your files by feature. 

It will keep you from searching and jumping around a project that contains hundreds of files.

<h1 align="center">
Listening for state changes
</h1>

Components that need to render state from the store can use the store.subscribe method to subscribe for state updates.

When a state update occurs, the forceUpdate method is called to render the component.

Within the components render method, the store.getState method is called to retrieve the current state.

This apporoach ensures that whenever state is updated in the store, the componenet will retrieve and render the updated state.

./src/components/FruitList.js

The componentDidMount and componentWillUpdate class component lifecylce methods can be used to ensure that the component subscribes to the store when it's mounted and unsubscribes from the store when the component is about to be unmounted.

<h1 align="center">
Dispatching actions
</h1>

./src/components/FruitQuickAdd.js

Updating a component to dispatch an action to the store is a bit simpler overall than listening for and rendering state updates. 

You just need to import the appropriate action creator function and use the store.dispatch method within a event handler to dispatch the action.






