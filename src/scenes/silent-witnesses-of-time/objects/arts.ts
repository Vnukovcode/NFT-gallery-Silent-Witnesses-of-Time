import { shapesMap } from '../localConsts/resources';
import { createEntity, createNFTShape, hyperlink, ICreateEntityParams } from '../utils/objectsUtils';

const createNFT = (params: ICreateEntityParams, nftSource: string, url: string, hoverText?: string): Entity => {
    const entity = createEntity({...params, shape: createNFTShape(nftSource, new Color3(0.6404918, 0.611472, 0.8584906))});

    return hyperlink(entity, url, hoverText);
}

export const createNFT1 = (parent: Entity) => createNFT(
    {
        name: '1NFT',
        parent,
        position: new Vector3(16.239013671875, 8, 8),
        rotation: new Quaternion(-2.8098587960366647e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
        scale: new Vector3(24.000032424926758, 24, 4.199428081512451)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562803866662862849",
    "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562803866662862849/",
    "Digital Lady"
);

export const createNFT2 = (parent: Entity) => createNFT(
    {
        name: '3NFT',
        parent,
        position: new Vector3(16.623384475708008, 28.6457462310791, 21.593955993652344),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(16.802940368652344, 16.802940368652344, 3.669994592666626)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562806065686118401",
    "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562806065686118401/",
    "Digital Lady"
);

export const createNFT3 = (parent: Entity) => createNFT(
    {
        name: '2NFT',
        parent,
        position: new Vector3(9.231773376464844, 29.47634506225586, 14.768996238708496),
        rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
        scale: new Vector3(19.88693618774414, 23.279953002929688, 7.185534477233887)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562804966174490625",
    "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562804966174490625/",
    "Digital Lady"
);

export const createNFT4 = (parent: Entity) => createNFT(
    {
        name: 'Nibbles6',
        parent,
        position: new Vector3(23.01179313659668, 12.720520973205566, 18),
        rotation: new Quaternion(-8.542075704274284e-15, 0.7046722769737244, -8.400347439874167e-8, 0.7095330357551575),
        scale: new Vector3(9.749870300292969, 9.75, 3.4729690551757812)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562818160314023937",
    "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562818160314023937/",
    "Nibbles 5555"
);

export const createNFT5 = (parent: Entity) => createNFT(
    {
        name: 'Nibbles2',
        parent,
        position: new Vector3(23.054838180541992, 12.691494941711426, 12.221010208129883),
        rotation: new Quaternion(-1.404858183723292e-14, 0.7071067094802856, -8.429368136830817e-8, 0.7071069478988647),
        scale: new Vector3(9.682963371276855, 9.68288803100586, 4.401499271392822)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562813762267512833",
    "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562813762267512833/",
    "Nibbles 5555"
);

export const createNFT6 = (parent?: Entity) => createNFT(
    {
        name: 'small collection Nibbles5000',
        parent,
        position: new Vector3(16.39468765258789, 15.503381729125977, 21.522764205932617),
        rotation: new Quaternion(4.9996564403982386e-15, 0.004847526550292969, -5.77867254047959e-10, 0.999988317489624),
        scale: new Vector3(22.237789154052734, 22.23773765563965, 5.876458168029785)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562820359337279489",
    "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562820359337279489/",
    "Small collection Nibbles5000"
);

export const createPicture1 = (parent: Entity) => hyperlink(
    createEntity({
        name: 'albi',
        parent,
        shapeSource: shapesMap.albi,
        position: new Vector3(16.197309494018555, 31.37236976623535, 14.688797950744629),
        rotation: new Quaternion(5.565262690927298e-16, 0.33167755603790283, -3.9539042262504154e-8, 0.9433928728103638),
        scale: new Vector3(14.938949584960938, 13.94373893737793, 13.943737983703613)
    }),
    'https://opensea.io/collection/myoil',
    'White Crow'
);

export const createPicture2 = (parent: Entity) => hyperlink(
    createEntity({
        name: 'andre',
        parent,
        shapeSource: shapesMap.andre,
        position: new Vector3(16.28202247619629, 31.391559600830078, 14.618451118469238),
        rotation: new Quaternion(5.565262690927298e-16, 0.33167755603790283, -3.9539042262504154e-8, 0.9433928728103638),
        scale: new Vector3(14.938949584960938, 13.94373893737793, 13.943737983703613)
    }),
    'https://opensea.io/SYNCO',
    'Buddha'
);

export const createPicture3 = (parent: Entity) => hyperlink(
    createEntity({
        name: 'leha',
        parent,
        shapeSource: shapesMap.leha,
        position: new Vector3(20.926359176635742, 31.318635940551758, 6.607178688049316),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.21089515089988708, 0.21089515089988708, 0.21089515089988708)
    }),
    'https://www.instagram.com/p/CVP-5fLsmQo/',
    'A warm summer evening'
);

export const createPicture4 = (parent: Entity) => hyperlink(
    createEntity({
        name: 'sasha',
        parent,
        shapeSource: shapesMap.sasha,
        position: new Vector3(20.926359176635742, 31.318635940551758, 6.607178688049316),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.21089515089988708, 0.21089515089988708, 0.21089515089988708)
    }),
    'https://www.instagram.com/p/CXwhbVOKLBi/',
    'Meaning Catchers'
);

export const createPicture5 = (parent: Entity) => hyperlink(
    createEntity({
        name: 'natasha',
        parent,
        shapeSource: shapesMap.natasha,
        position: new Vector3(20.926359176635742, 31.318635940551758, 6.607178688049316),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.21089515089988708, 0.21089515089988708, 0.21089515089988708)
    }),
    'https://www.instagram.com/p/CE7y3nkihsa/',
    'Joseph'
);
