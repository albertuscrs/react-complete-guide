import React from 'react';
//js object that can be pass between components without using props behind the scene
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;