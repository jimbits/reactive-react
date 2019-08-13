# React-Tracked Library
I think one of the issues I have using react now is preventing unecessary rerenders. This is a simple counter example that uses the React Context API and React Hooks for global/state managment. One problem with hooks is that it renders you subtree any time the state of the context changes. So I have been trying to find a way to prevent that. Looks like some big minds have been hard at work on the problem. 
Daishi Kato has created a library that seems to solve this issue in a nice clean way. The library is called react-tracked. What follows is just a simple demo that contrast of how I used react hooks api and Daishi's library to prevent counters from rendering when there state didn't change.

### hooks link (landing page)
The landing page uses the React Context API and React Hooks to provide each counter with the updated value. If you turn on your React Dev Tools and highlight changes you will see that the whole counter display renders each time one of the counters is clicked. So I wanted to see if I could prevent this....I couldn't so it led me to think how to the pro's do it. After some research seems like the big minds in react have the same issue. I tried React.memo, useMemo() but the sub tree still renderd.
Here is a look at the Code I wrote...

### LandingPage.js

Counter Component uses props to display count state
 ```JSX
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {
  render() {
    return (
        <p className="App-intro">
          I'm a childish component
        </p>
    );
  }
}

export default Child;
```

### CounterDisplay.js

Counter Component uses props to display count state
 ```JSX
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {
  render() {
    return (
        <p className="App-intro">
          I'm a childish component
        </p>
    );
  }
}

export default Child;
```


### Counter.js
Counter Component uses props to display count state
 ```JSX
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {
  render() {
    return (
        <p className="App-intro">
          I'm a childish component
        </p>
    );
  }
}

export default Child;
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

 
