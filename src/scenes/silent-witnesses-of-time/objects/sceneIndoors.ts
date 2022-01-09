import { createEntity, setPosition } from '../utils/objectsUtils';
import { createGrass1, createGrass2, createGrass3, createGrass4 } from '../objects/grass';
import { createStairs } from '../objects/stairs';
import { createCeiling1, createCeiling2, createWalls } from '../objects/walls';
import { createNFT1, createNFT2, createNFT3, createNFT4, createNFT5, createNFT6,
    createPicture1, createPicture2, createPicture3, createPicture4, createPicture5 } from './arts';
import { createSocialLink1, createSocialLink2, createSocialLink3, createSocialLink4, createSocialLink5, createSocialLink6 } from './social';

// Все дочерние объекты внутренней сцены.
let children: Entity[] = [];

// Создаём (но не рендерим) лейаут сцены внутреннего пространства галереи. (возвращает Entity лейаута)
export const createIndoorsLayout = (parent?: Entity): Entity => createEntity({
    name: 'sceneIndoors',
    parent,
    position: setPosition(0, 0, 0),
    scale: new Vector3(1, 1, 1)
});

// Создаём (но не рендерим) все дочерние объекты. Добавляем в массив children для дальнейшей обработки.
export const createChildrenIndoors = (indoorsScene: Entity): void => {
    children.push(
	    // Grass floor
        createGrass1(indoorsScene),
        createGrass2(indoorsScene),
        createGrass3(indoorsScene),
        createGrass4(indoorsScene),
        // Stairs
        createStairs(indoorsScene),
        // Walls
        createWalls(indoorsScene),
        createCeiling1(indoorsScene),
        createCeiling2(indoorsScene),
        // NFT items
        createNFT1(indoorsScene),
        createNFT2(indoorsScene),
        createNFT3(indoorsScene),
        createNFT4(indoorsScene),
        createNFT5(indoorsScene),
        createNFT6(indoorsScene),
        createPicture1(indoorsScene),
        createPicture2(indoorsScene),
        createPicture3(indoorsScene),
        createPicture4(indoorsScene),
        createPicture5(indoorsScene),
        // Social links
        createSocialLink1(indoorsScene),
        createSocialLink2(indoorsScene),
        createSocialLink3(indoorsScene),
        createSocialLink4(indoorsScene),
        createSocialLink5(indoorsScene),
        createSocialLink6(indoorsScene)
	)
}