import { createChildrenOutdoors, createOutdoorsLayout } from './objects/sceneOutdoors';
import { createIndoorsLayout, createChildrenIndoors } from './objects/sceneIndoors';
import { Like } from './components/Like';
import { person } from './components/npc/person'; // NPC для встречи гостей
import { createTeleport } from './objects/teleport';
import { setPosition } from './utils/objectsUtils';
import { VECTOR_OFFSET } from './offsets';
import { movePlayerTo } from '@decentraland/RestrictedActions';
import { jumpVector } from './consts/vectors';

export function createSilentWitnessesOfTimeScene () {
  const outdoors = createOutdoorsLayout();
  const indoors = createIndoorsLayout();
  
  createChildrenOutdoors(outdoors);
  createChildrenIndoors(indoors);

  engine.addEntity(outdoors);

  // Teleport
  const teleport = createTeleport();
  teleport.addComponent(
    new OnPointerDown(
      (e) => {
        if (outdoors.alive) {
            engine.removeEntity(outdoors);;
            engine.addEntity(indoors);
            movePlayerTo(teleport.getComponent(Transform).position.add(jumpVector));
        // И наоборот
        } else {
            engine.removeEntity(indoors);
            engine.addEntity(outdoors);
            movePlayerTo(teleport.getComponent(Transform).position.add(jumpVector));
        }
      },
      { button: ActionButton.POINTER }
    )
  )
  engine.addEntity(teleport);
  
  // Likes counter
  const like = new Like(
    {
      position: setPosition(2.5, 1, 0.5).add(VECTOR_OFFSET),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(0.6, 0.6, 0.6)
    },
    '61be21382b9ee78dd82fc2d2'
  )
}
