import { createEntity, setPosition } from '../utils/objectsUtils';
import { createClaw1, createClaw2 } from '../objects/claws';
import { sand1, sand2, sand3, sand4 } from '../objects/sand';
import { createPlant1, createPlant2 } from '../objects/plants';
import { createPodium } from '../objects/podium';
import { createTower } from '../objects/tower';
import { SimpleRotateSystem } from '../systems/SimpleRotate';

export const createOutdoorsLayout = (parent?: Entity) => createEntity({
    name: 'sceneOutdoors',
    parent,
    position: setPosition(16, 0, 16),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
});

export function showOutdoorsScene (outdoorsScene: Entity) {  
    engine.addEntity(createPodium(outdoorsScene))
    
    engine.addEntity(createPlant1(outdoorsScene))  
    engine.addEntity(createPlant2(outdoorsScene))
    
    engine.addEntity(sand1(outdoorsScene));
    engine.addEntity(sand2(outdoorsScene));
    engine.addEntity(sand3(outdoorsScene));
    engine.addEntity(sand4(outdoorsScene));
    
    const tower = createTower(outdoorsScene);
    engine.addEntity(tower);
    engine.addSystem(new SimpleRotateSystem(tower));
    
    engine.addEntity(createClaw1(outdoorsScene));
    engine.addEntity(createClaw2(outdoorsScene));
  
    
    engine.addEntity(createPlant2(outdoorsScene));
}
