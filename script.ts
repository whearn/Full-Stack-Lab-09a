class Die {
    value: number;
    div: HTMLDivElement;

    constructor(value: number) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.innerHTML = this.value.toString();
        this.div.addEventListener('click', () => {
            this.roll();
        });
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let index = myDice.indexOf(this);
            myDice.splice(index, 1);
        });
        document.body.appendChild(this.div);
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.innerHTML = this.value.toString();
    }
}

let myDice: Array<Die> = [];
let generateBtn: HTMLElement = document.getElementById('generate');;
let rollBtn: HTMLElement = document.getElementById('roll');;
let sumBtn: HTMLElement = document.getElementById('sum');;

generateBtn.addEventListener('click', () => {
    let newValue = Math.floor(Math.random() * 6) + 1;
    myDice.push(new Die(newValue));
});

rollBtn.addEventListener('click', () => {
    for (let i = 0; i < myDice.length; i++) {
        myDice[i].roll();
    }
});

sumBtn.addEventListener('click', () => {
    let dieSum = 0;
    for (let i = 0; i < myDice.length; i++) {
        dieSum = dieSum + myDice[i].value;
    }
    alert(`The current value of all of the dice is: ${dieSum}`);
});