

import { User } from "./user.js";

(async () => {
    // const u1 = await User.create({
    //     username: 'Peterson', // username must be unique. This raw query will also fail: UPDATE app_users SET username=null WHERE id = 1;
    //     hashedPassword: 'a100'
    // });
    // console.log(u1.toJSON())

    const u2 = await User.findOne();
    await u2.validate();
    console.log(u2.toJSON());
})();