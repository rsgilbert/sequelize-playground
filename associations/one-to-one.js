import { Mattress, Pillow, Bed } from "./tables.js";


// mattress is source
Mattress.hasOne(Bed, {
    foreignKey: {
        name: 'mattress_id_fk',
        allowNull: false // mandatory. Every bed must have a mattress
    }
}); 

// Bed is target
// Will have a property called mattressId
Bed.belongsTo(Mattress, {
    foreignKey: {
        name: 'mattress_id_fk',
        allowNull: false // mandatory. Every bed must have a mattress
    }
});




(async () => {
    // await Mattress.sync({ alter: true });
    // await Bed.sync({ alter: true });

    const m1 = await Mattress.create({ 
        width: 55.4,
        height: 100.4,
        length: 205,
        vendor: 'Lugasa'
    });
    console.log(m1.toJSON())

    // const m1 = await Mattress.findByPk(2);

    const b1 = await Bed.create({ 
        width: 1,
        height: 0.1,
        material: 'wood',
        mattress_id_fk: m1.id
    });
    console.log(b1)

    // await m1.destroy();
    // const b2 = await Bed.findAll();
    // console.log(b2) // empty set
})();