let data = [
  (dataA = { principal: 2500, time: 1.8 }),
  (dataB = { principal: 1000, time: 5 }),
  (dataC = { principal: 3000, time: 1 }),
  (dataD = { principal: 2000, time: 3 })
];
function interestCalculator(arg){
  for (let i = 0; i < arg.length; i += 1)
    if (arg[i].principal >= 2500 && arg[i].time > 1 && arg[i].time < 3) {
      arg[i].rate = 3;
    } else if (arg[i].principal >= 2500 && arg[i].time >= 3) {
      arg[i].rate = 4;
    } else if (arg[i].principal < 2500 || arg[i].time <= 1) {
      arg[i].rate = 2;
    } else {
      arg[i].rate = 1;
    }
  for (let i = 0; i < arg.length; i += 1) {
    arg[i].interest = (arg[i].principal * arg[i].rate * arg[i].time) / 100;
  }
  let interestData = [arg];
  console.log(interestData);

  return interestData;
};
interestCalculator(data);
