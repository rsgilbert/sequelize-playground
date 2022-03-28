import { Human } from '../human.js'

const  joan = Human.build({ 
    fname: 'Joanne K Rowling',
    age: 45
});

(async function() {
    const j = await joan.save();
    // eslint-disable-next-line no-undef
    console.log('joan saved', j)
}())

console.log(joan instanceof Human)
console.log(joan);
console.log(joan.fname);

// create
(async () => {
    const mark = await Human.create({
        fname: 'Caesar',
        age: 17,
        cash: 3_000_000
    });
    console.log('created mark', mark);
    console.log('mark json', mark.toJSON())
})()