import { createEntity, setPosition } from '../utils/objectsUtils';
import { createClaw1, createClaw2 } from '../objects/claws';
import { sand1, sand2, sand3, sand4 } from '../objects/sand';
import { createPlant1, createPlant2 } from '../objects/plants';
import { createPodium } from '../objects/podium';
import { createTower } from '../objects/tower';
import { SimpleRotateSystem } from '../systems/SimpleRotate';
import { LAYOUT_POSITION, LAYOUT_ROTATION } from '../consts';

// Все дочерние объекты внешней сцены.
let children: Entity[] = [];

// Создаём (но не рендерим) лейаут внешней сцены. (возвращает Entity лейаута)
export const createOutdoorsLayout = (parent?: Entity) => createEntity({
    name: 'sceneOutdoors',
    parent,
    position: setPosition(0, 0, 0),
    scale: new Vector3(1, 1, 1)
});

// Создаём (но не рендерим) все дочерние объекты. Добавляем в массив children для дальнейшей обработки.
export function createChildrenOutdoors (outdoorsScene: Entity) {
    children.push(
        // Podium
        createPodium(outdoorsScene),
        // Plants
        createPlant1(outdoorsScene),  
        createPlant2(outdoorsScene),
        // Sand floor
        sand1(outdoorsScene),
        sand2(outdoorsScene),
        sand3(outdoorsScene),
        sand4(outdoorsScene),
        // Architect claws
        createClaw1(outdoorsScene),
        createClaw2(outdoorsScene)
    )
    
    const tower = createTower(outdoorsScene);
    engine.addSystem(new SimpleRotateSystem(tower));
    children.push(tower);
}
