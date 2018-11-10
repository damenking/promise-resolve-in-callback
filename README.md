# promise-resolve-in-callback
Code example of using promises to get data from a function that accepts a callback but doesn't return a value

I recently had an issue using a function from an image library that modified an image and accepted a callback designed for DOM manipulation using the resulting image but did not actually return anything.  I needed the result of the image modification so I used this technique to get the value I needed while maintaining the flow of my app.  Works well for an event handler.  If you needed the result as part of further application logic you'd want to have numberFunc return the promise and continue within a .then() block.
