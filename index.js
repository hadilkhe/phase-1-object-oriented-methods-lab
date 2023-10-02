
function BoardMember(name, homeState, training) {
    
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  BoardMember.prototype = {
    veto: function() {
      return 'No, I must disagree';
    },
    approve: function() {
      return 'You can do that!';
    },
    doCharity: function() {
      return 'I like to help people.';
    },
    releasePressStatement: function() {
      return 'You will see great things from Scuber.';
    },
    sayHi: function() {
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
    }
  };
  
  // Example usage:
  const boardMember = new BoardMember('John', 'New York', 'Finance');
  console.log(boardMember.veto()); 
  console.log(boardMember.approve()); 
  console.log(boardMember.doCharity()); 
  console.log(boardMember.releasePressStatement()); 
  console.log(boardMember.sayHi());  in Finance.
  