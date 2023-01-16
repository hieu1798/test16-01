const check = (number) => {
    for (let i = 3; i < number - 1; i++) {
      if (number % i === 0) {
        return 0;
      }
    }
    return number;
  };
  
  const handler = (a, b) => {
    let sum = 0;
    if (a >= b) {
      alert("A phải nhỏ hơn B");
      return;
    }
    for (let i = a; i < b - 1; i++) {
      sum += check(i);
    }
  
    return sum;
  };
  
  handler(20, 50);