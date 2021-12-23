import { createEntity, setPosition, createNFTShape, ICreateEntityParams } from '../utils/objectsUtils';

const createNFT = (params: ICreateEntityParams, nftSource: string) => {
    return createEntity({...params, shape: createNFTShape(nftSource, new Color3(0.6404918, 0.611472, 0.8584906))})
}

export const createNFT1 = (parent?: Entity) => createNFT(
    {
        name: 'nft1',
        parent,
        position: setPosition(16.239013671875, 8, 8),
        rotation: new Quaternion(-2.8098587960366647e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
        scale: new Vector3(24.000032424926758, 24, 4.199428081512451)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562803866662862849"
);

export const createNFT2 = (parent?: Entity) => createNFT(
    {
        name: 'nft2',
        parent,
        position: setPosition(16.140277862548828, 15, 21.5),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(16.802940368652344, 16.802940368652344, 3.669994592666626)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562806065686118401"
);

export const createNFT3 = (parent?: Entity) => createNFT(
    {
        name: 'nft3',
        parent,
        position: setPosition(9.231773376464844, 20.62362289428711, 14.768996238708496),
        rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
        scale: new Vector3(19.886932373046875, 23.279953002929688, 7.185532569885254)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562804966174490625"
);

export const createNFT4 = (parent?: Entity) => createNFT(
    {
        name: 'nft4',
        parent,
        position: setPosition(23.01179313659668, 12.720520973205566, 18),
        rotation: new Quaternion(-8.542075704274284e-15, 0.7046722769737244, -8.400347439874167e-8, 0.7095330357551575),
        scale: new Vector3(9.749870300292969, 9.75, 3.4729690551757812)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562818160314023937"
);

export const createNFT5 = (parent?: Entity) => createNFT(
    {
        name: 'nft5',
        parent,
        position: setPosition(23.054838180541992, 12.691494941711426, 12.221010208129883),
        rotation: new Quaternion(-1.404858183723292e-14, 0.7071067094802856, -8.429368136830817e-8, 0.7071069478988647),
        scale: new Vector3(9.682963371276855, 9.68288803100586, 4.401499271392822)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562813762267512833"
);

export const createNFT6 = (parent?: Entity) => createNFT(
    {
        name: 'nft6',
        parent,
        position: setPosition(16.5, 31, 14.68205451965332),
        rotation: new Quaternion(0, -0.0980171412229538, 1.1684551992630077e-8, 0.9951847195625305),
        scale: new Vector3(6.3778605461120605, 6.5, 3.412755250930786)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562797269593096193"
);

export const createNFT7 = (parent?: Entity) => createNFT(
    {
        name: 'nft7',
        parent,
        position: setPosition(16.445465087890625, 30.97040367126465, 14.951661109924316),
        rotation: new Quaternion(7.66930311981882e-15, 0.9958511590957642, -1.1871469496327336e-7, 0.09099756181240082),
        scale: new Vector3(6.791818618774414, 6.731405258178711, 4.116515636444092)
    },
    "ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/33680074785513278521361303644377743928850419992622035744070562799468616351745"
);
