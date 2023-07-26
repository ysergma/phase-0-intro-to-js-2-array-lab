// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

const destructivelyAppendCat=function(name){
  cats.push(name)
}

const destructivelyPrependCat=function(name){
    cats.unshift(name)
  }

  const destructivelyRemoveLastCat=function(name){
    cats.pop(name)
  }

  const destructivelyRemoveFirstCat=function(name){
    cats.splice(0,1)
  }

  const appendCat=function(name){
    let newArr=[];
    newArr.push(name)
    return cats.concat(newArr)
  }

  const prependCat=function(name){
    let newArr=[];
    newArr.push(name)
    return newArr.concat(cats)
  }

  const removeLastCat=function(name){
    let newArr=[];
    let catArr=newArr.concat(cats);
    return catArr.slice(0,2);
  }

  const removeFirstCat=function(name){
    let newArr=[];
    let catArr=newArr.concat(cats);
    return catArr.slice(1,3);
  }