import { Human } from '../human.js';


// (async () => {
// 	const r = await Human.create({
// 		fname: 'Ronald',
// 		age: 12,
// 		cash: 500
// 	});
// 	console.log(r.toJSON());
// 	r.set({ age: 50 })
// 	await r.save();
// })();

// use .update
// (async () => {
// 	const r = await Human.create({
// 		fname: 'Peter',
// 		age: 56,
// 		cash: 240
// 	});
// 	console.log(r.toJSON());
// 	await r.update({ age:1, cash: -45 });
// })();

// destroy
(async () => {
	const r = await Human.create({
		fname: 'Megan',
		age: 10,
		cash: 50
	});
	console.log(r.toJSON());
    const nR = await r.destroy();
    console.log('After destroying', nR, '; r', r.toJSON())
})();

// After reloading

(async () => {
	const r = await Human.create({
		fname: 'Moses',
		age: 120,
		cash: 40
	});
	console.log(r.toJSON());
    await r.update({ age: 5000 , cash: 2000 });
    console.log('After updating', r.toJSON()) // shows updated value

    r.set({ age: -4, cash: -20 });
    console.log('After setting', r.toJSON()) // shows set value

    await r.save();

    await r.reload();
    console.log('After reloading', r.toJSON()) // shows whats in db

})();