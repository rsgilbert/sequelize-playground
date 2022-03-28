import sequelize from "../seq.js";
import { DataTypes, Model } from '@sequelize/core'
import { gzipSync, gunzipSync } from 'zlib';

const Story = sequelize.define('story', {
    content: {
        type: DataTypes.TEXT,
        get() {
            const storedValue = this.getDataValue('content');
            console.log('stored value', storedValue);
            const gzippedBuffer = Buffer.from(storedValue, 'base64');
            console.log('gzippedBuffer', gzippedBuffer);
            const unzippedBuffer = gunzipSync(gzippedBuffer);
            console.log('unzippedBuffer', unzippedBuffer);
            const textContent = unzippedBuffer.toString();
            console.log('text content to return', textContent);
            return textContent;
        },
        set(value) {
            console.log('value to set', value);
            const gzippedBuffer = gzipSync(value);
            console.log('gzippedBuffer', gzippedBuffer);
            const encodedString = gzippedBuffer.toString('base64');
            console.log('base64 encoded string', encodedString);
            this.setDataValue('content', encodedString);
        }
    }
});

(async () => {
    await Story.sync();
    const [st1] = await Story.findOrCreate({ where: {
        content: 'Genesis' // this content is different from whats in db so findOrCreate will always create
    }});
    console.log('st1 is', st1.toJSON());
    console.log('story db value is', st1.getDataValue('content'))
})();

