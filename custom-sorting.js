var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function customSorting(array) {
  return array.sort(function(a, b) {
    if (a.name === b.name) {
      return b.age - a.age;
    }
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  });
}

console.log(customSorting(students));

// sort first by name, ascending alphebatically

// in cases where names are equal, sort by descending age
