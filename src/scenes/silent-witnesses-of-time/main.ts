import { createOutdoors } from './objects/sceneOutdoors';
import { createClaw1, createClaw2 } from './objects/claws';
import { sand1, sand2, sand3, sand4 } from './objects/sand';
import { createPlant1, createPlant2 } from './objects/plants';
import { createStairs } from './objects/stairs';
import { createTower } from './objects/tower';
import { SimpleRotateSystem } from './systems/SimpleRotate';
import { Like } from './components/Like';
import { createEntity, setPosition } from './utils/objectsUtils';
import { person } from './components/npc/person'; // NPC для встречи гостей

export function createSilentWitnessesOfTimeScene () {
  const mainScene = createEntity({
    name: 'mainScene',
    position: setPosition(64, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });

  const outdoorsScene = createOutdoors(mainScene);
  engine.addEntity(outdoorsScene);
  
  engine.addEntity(createStairs(outdoorsScene))
  
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
  
  const like = new Like(
    {
      position: setPosition(66.5, 1, 0.5),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(0.6, 0.6, 0.6)
    },
    '61be21382b9ee78dd82fc2d2'
  )
}
