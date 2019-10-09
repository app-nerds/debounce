# Debounce

A function to execute another function after a specified delay. Really useful when you want to ensure a function isn't called too frequently. For example, if you want to send search criteria to a server after the user types, but don't wish to sent **too** many server calls, this method can be used. 

## Example

```js
import debounce from "debounce.js";

function performSearch(term) {
   return debounce(executeSearch, 500);
}
```

## Arguments

* **fn** - The method to execute
* **delay** - The delay in execution in milliseconds

