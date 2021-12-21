import { createEntity, setPosition, createNFTShape, ICreateEntityParams } from '../utils/objectsUtils';

const createNFT = (params: ICreateEntityParams, nftSource: string) => {
    return createEntity({...params, shape: createNFTShape(nftSource, new Color3(0.6404918, 0.611472, 0.8584906))})
}

export const createNFT1 = (parent?: Entity) => createNFT(
    {
        name: 'nft1',
        parent,
        position: setPosition(16.95895767211914, 8, 8),
        rotation: new Quaternion(-2.8098587960366647e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
        scale: new Vector3(24.000032424926758, 24, 4.199428081512451)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562803866662862849"
);

export const createNFT2 = (parent?: Entity) => createNFT(
    {
        name: 'nft2',
        parent,
        position: setPosition(16.95895767211914, 8, 8),
        rotation: new Quaternion(-2.8098587960366647e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
        scale: new Vector3(24.000032424926758, 24, 4.199428081512451)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562806065686118401"
);

export const createNFT3 = (parent?: Entity) => createNFT(
    {
        name: 'nft3',
        parent,
        position: setPosition(10, 20.62362289428711, 16.015701293945312),
        rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
        scale: new Vector3(19.88692855834961, 23.279953002929688, 7.185530662536621)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562804966174490625"
);

export const createNFT4 = (parent?: Entity) => createNFT(
    {
        name: 'nft4',
        parent,
        position: setPosition(23.69536018371582, 12.720520973205566, 18.5),
        rotation: new Quaternion(-8.542075704274284e-15, 0.7046722769737244, -8.400347439874167e-8, 0.7095330357551575),
        scale: new Vector3(9.749845504760742, 9.75, 3.472961902618408)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562818160314023937"
);

export const createNFT5 = (parent?: Entity) => createNFT(
    {
        name: 'nft5',
        parent,
        position: setPosition(23.75627899169922, 12.691494941711426, 12.65554428100586),
        rotation: new Quaternion(-1.404858183723292e-14, 0.7071067094802856, -8.429368136830817e-8, 0.7071069478988647),
        scale: new Vector3(9.682957649230957, 9.68288803100586, 4.401496410369873)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562813762267512833"
);

export const createNFT6 = (parent?: Entity) => createNFT(
    {
        name: 'nft6',
        parent,
        position: setPosition(16.5, 31, 15.701234817504883),
        rotation: new Quaternion(0, -0.0980171412229538, 1.1684551992630077e-8, 0.9951847195625305),
        scale: new Vector3(6.3778581619262695, 6.5, 3.412755250930786)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562797269593096193"
);

export const createNFT7 = (parent?: Entity) => createNFT(
    {
        name: 'nft7',
        parent,
        position: setPosition(16.445465087890625, 30.97040367126465, 15.970841407775879),
        rotation: new Quaternion(7.66930311981882e-15, 0.9958511590957642, -1.1871469496327336e-7, 0.09099756181240082),
        scale: new Vector3(6.79181432723999, 6.731405258178711, 4.116514205932617)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562799468616351745"
);
