# client-app
Client (hiring manager's) user interface (both responsive web and ReactNative for iOS and Android)


## Run the App
The following command will run the app and open a new tab in your browser to preview the app. It will also hot-reload any changes you saved.
```bash
npm start
```

### ReactJS app

This project uses ReactJS

### IDE

This project uses Nuclide as an IDE. (Atom package)

Link: https://nuclide.io/


### Static type checking

To run flow:

```bash
npm run-script flow
```


## App Explanation

### Containers

Containers are the components (pages) which have access to the redux stores. These are called 'smart' components

### Components

Components are small pieces of code that do not hold any state. Any 'state' that they have to know will be passed through as props (from the parent). These are refered to as 'dumb' components
