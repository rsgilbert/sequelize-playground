import { DataTypes } from "@sequelize/core";
import sequelize from "../seq.js";

export const Bed = sequelize.define('beds', {
    width: {
        type: DataTypes.DECIMAL,
    },
    height: {
        type: DataTypes.DECIMAL
    },
    material: {
        type: DataTypes.STRING,
    }
});

export const Pillow = sequelize.define('pillow', {
    color: {
        type: DataTypes.STRING
    },
    width: {
        type: DataTypes.DECIMAL
    }
})

export const Mattress = sequelize.define('mattress', {
    width: {
        type: DataTypes.DECIMAL
    },
    height: {
        type: DataTypes.DECIMAL
    },
    length: {
        type: DataTypes.DECIMAL
    },
    vendor: {
        type: DataTypes.STRING
    }
})