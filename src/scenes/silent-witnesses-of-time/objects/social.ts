import { setPosition } from '../utils/objectsUtils';
import { shapesMap } from '../localConsts/resources';
import { createSocialLink, ESocialLinkType } from '../components/social';

export const createSocialLink1 = (parent: Entity): Entity => createSocialLink({
    name: '@bisha_p   https://www.artstation.com/bishaa',
    parent,
    type: ESocialLinkType.TWITTER,
    url: 'https://twitter.com/bisha_p',
    position: setPosition(15.642425537109375, 2.629770278930664, 14.27983283996582),
    rotation: new Quaternion(3.8578679389002625e-16, -0.4280148446559906, 5.1023334890487604e-8, -0.9037717580795288),
    scale: new Vector3(1, 1, 1)
})

export const createSocialLink2 = (parent: Entity): Entity => createSocialLink({
    name: '@KSinthiqcosm   https://www.artstation.com/kosimasinthiqcosm',
    parent,
    type: ESocialLinkType.TWITTER,
    url: 'https://twitter.com/KSinthiqcosm',
    position: setPosition(16.501651763916016, 2.629770278930664, 13.879104614257812),
    rotation: new Quaternion(-5.3024974005794895e-15, 0.045671433210372925, -5.4444662112018705e-9, -0.9989566206932068),
    scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})

export const createSocialLink3 = (parent: Entity): Entity => createSocialLink({
    name: '@aleshavnukov.art',
    parent,
    type: ESocialLinkType.INSTAGRAM,
    url: 'https://www.instagram.com/aleshavnukov.art',
    position: setPosition(15.429034233093262, 2.629770278930664, 15.189473152160645),
    rotation: new Quaternion(6.417481597401162e-16, -0.8067431449890137, 9.617126295324852e-8, -0.5909023284912109),
    scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})

export const createSocialLink4 = (parent: Entity): Entity => createSocialLink({
    name: '@natashavostokova',
    parent,
    type: ESocialLinkType.INSTAGRAM,
    url: 'https://www.instagram.com/natashavostokova',
    position: setPosition(16.18106460571289, 2.629770278930664, 15.804306983947754),
    rotation: new Quaternion(-1.350195823032654e-15, -0.9924299716949463, 1.1830684343294706e-7, -0.12281212210655212),
    scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})

export const createSocialLink5 = (parent: Entity): Entity => createSocialLink({
    name: '@cryptoanarchisto',
    parent,
    type: ESocialLinkType.GIT_HUB,
    url: 'https://github.com/cryptoanarchisto',
    position: setPosition(17.114953994750977, 2.629770278930664, 15.537853240966797),
    rotation: new Quaternion(3.8578679389002625e-16, -0.4280148446559906, 5.1023334890487604e-8, -0.9037717580795288),
    scale: new Vector3(1, 1, 1)
})

export const createSocialLink6 = (parent: Entity): Entity => createSocialLink({
    name: '@meaning_catchers',
    parent,
    type: ESocialLinkType.INSTAGRAM,
    url: 'https://www.instagram.com/meaning_catchers',
    position: setPosition(17.28337287902832, 2.629770278930664, 14.50849437713623),
    rotation: new Quaternion(-7.366542204251085e-15, 0.5656806230545044, -6.743439229239812e-8, -0.8246244788169861),
    scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})