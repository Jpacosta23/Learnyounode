// console.log(process.argv);
let len=process.argv.length;

let sum=0;
for (let index = 2; index < len; index++) {

    sum+=Number(process.argv[index]);   
}
console.log(sum);

