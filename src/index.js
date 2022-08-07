import React from 'react';
import AppNavigator from './navigation/index';
import { init } from "./db";

init()
.then(() => {
  console.log("DB initialized");
})
.catch((err) => {
  console.log("Error initializing DB", err);
});

const Root = () => {
  return (
    <AppNavigator />
  );
}

export default Root;

