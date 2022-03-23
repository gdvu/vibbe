<span></span>

<div align="center">
  <a href="https://github.com/gdvu/vibbe-react" rel="noopener" target="_blank"><img width="150" src="https://vibbe.s3.amazonaws.com/static/vibbe.png" alt="Vibbe logo"></a>
<h1 align="center">Vibbe</h1>
</div>

Vibbe is a simple, customizable and lightweight component library for building applications in NextJS.

## Installation

Vibbe is available for npm & yarn

```sh
// with npm
npm install @vibbe/react

// with yarn
yarn add @vibbe/react
```

## Usage

Import the components available in the documentation and use the default theme:

```jsx
import React from 'react';
import { Button } from '@vibbe/react';

const Home = () => {
  return (
    <Button variant='contained' color='primary'>
      Hello World
    </Button>
  );
};
export default Home;
```

To use your own theme configure from your project entry point:

```jsx
import React from 'react';
import { CreateTheme, ThemeProvider } from '@vibbe/react';

const theme = CreateTheme({
	colors: {
		primary: "#30fee0"
	}
})

export default function App({Component, pageProps}) {
  return (
    <ThemeProvider theme={}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

```
