import { createEntity, setPosition } from '../utils/objectsUtils';
import { createGrass1, createGrass2, createGrass3, createGrass4 } from '../objects/grass';
import { createStairs } from '../objects/stairs';
import { createWalls1, createWalls2 } from '../objects/walls';
import { createNFT1, createNFT2, createNFT3, createNFT4, createNFT5, createNFT6, createNFT7 } from '../objects/nft';

export const createIndoorsScene = () => createEntity({
    name: 'sceneIndoors',
    position: setPosition(16, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});

export function showIndoorsScene (indoorsScene: Entity) {
    engine.addEntity(createGrass1(indoorsScene));
    engine.addEntity(createGrass2(indoorsScene));
    engine.addEntity(createGrass3(indoorsScene));
    engine.addEntity(createGrass4(indoorsScene));
    
    engine.addEntity(createStairs(indoorsScene));
    
    engine.addEntity(createWalls1(indoorsScene));
    engine.addEntity(createWalls2(indoorsScene));
    
    engine.addEntity(createNFT1(indoorsScene));
    engine.addEntity(createNFT2(indoorsScene));
    engine.addEntity(createNFT3(indoorsScene));
    engine.addEntity(createNFT4(indoorsScene));
    engine.addEntity(createNFT5(indoorsScene));
    engine.addEntity(createNFT6(indoorsScene));
    engine.addEntity(createNFT7(indoorsScene));

    return indoorsScene;
}