const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const collectionCopy = (typeof collection === "object") ? Object.values(collection) : collection.slice();

      for (let i = 0; i < collectionCopy.length; i++) {
        callback(collectionCopy[i])
      }
      return collection;

    },

    map: function(collection, callback) {
      const collectionCopy = (typeof collection === "object") ? Object.values(collection) : collection.slice();
      const newArray = [];
      for (let i = 0; i < collectionCopy.length; i++) {
        newArray.push(callback(collectionCopy[i]))
      }
      return newArray;
  },

  reduce: function(collection, callback, acc) {
    const collectionCopy = (acc) ? collection.slice() : collection.slice(1);
    let total = (acc) ?  acc : collection[0]
    for (let i = 0; i < collectionCopy.length; i++) {
      total = callback(total, collectionCopy[i], collectionCopy)
    } 
    return total; 
  },

  find: function(collection, predicate) {
    if (!(collection instanceof Array))
      collection = Object.values(collection)

    for (let idx = 0; idx < collection.length; idx++)
      if (predicate(collection[idx])) return collection[idx]

    return undefined
  },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
