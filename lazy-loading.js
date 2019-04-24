/** 
 * Feature detection for native lazy-loading 
 * (https://addyosmani.com/blog/lazy-loading/) 
 * */

if ('loading' in HTMLImageElement.prototype) {
  // Browser supports `loading`..
} else {
  // Fetch and apply a polyfill/JavaScript library
  // for lazy-loading instead.
}
