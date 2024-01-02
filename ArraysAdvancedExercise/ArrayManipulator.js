function manipulate(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
      let eachCommand = commands[i].split(" ");
      let command = eachCommand[0];
      let index = Number(eachCommand[1]);
      let element = Number(eachCommand[2]);
      switch (command) {
        case "add":
          arr.splice(index, 0, element);
          break;
        case "addMany":
          for (let i = eachCommand.length - 1; i >= 2; i--) {
            let elToAdd = Number(eachCommand[i]);
            arr.splice(index, 0, elToAdd);
          }
          break;
        case "contains":
          let containsNumCheck = arr.indexOf(index);
          console.log(containsNumCheck);
          break;
        case "remove":
          arr.splice(index, 1);
          break;
        case "shift":
          for (let i = 0; i < index; i++) {
            let num = arr.shift();
            arr.push(num);
          }
          break;
        case "sumPairs":
          for (let i = 0; i < arr.length; i++) {
            let firstNum = Number(arr.splice(i, 1));
            let secondNum = Number(arr.splice(i, 1));
            let sum = firstNum + secondNum;
            arr.unshift(sum);
            sum = 0;
        }
        arr.reverse();
          break;
        case "print":
          let result = arr.join(", ");
          console.log(`[ ${result} ]`);
          break;
      }
    }
  }

manipulate([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);