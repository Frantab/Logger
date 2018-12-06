# es6-logger
Package `es6-logger` contains basic class which creates log's with custom information about one process in javascript (return of function for example).

#### How to install package
```bash
npm install @Frantab/Logger --save-dev
```

#### Example of usage.
```javascript
const {Logger} = require('es6-logger');
const myLogger = new Logger('myLogger');
const sayHelloWorld = () => {
	try {
		console.log('Hello world!');
		myLogger.log(1, 'We said hello to whole world.');
	} catch(error) {
		myLogger.log(1, 'We did not say hello world.', error);
	}
}

sayHelloWorld();
```

#### Example of log
```javascript
`Info log:
Function createElement() successfully created element. More about element in data of this log.
---
[object Object]`
```
