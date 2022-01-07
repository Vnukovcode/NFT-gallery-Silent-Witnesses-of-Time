import { createChildrenOutdoors, createOutdoorsLayout } from './objects/sceneOutdoors';
import { createIndoorsLayout, createChildrenIndoors } from './objects/sceneIndoors';
import { Like } from './components/Like';
import { createTeleport1, createTeleport2 } from './objects/teleport';
import { LAYOUT_POSITION, LAYOUT_ROTATION, LIKE_COUNTER_ID, LIKE_COUNTER_POSITION } from './consts';
import { person } from './components/npc/person'; // NPC для встречи гостей
import { createEntity } from './utils/objectsUtils';

export function createSilentWitnessesOfTimeScene () {
  const mainLayout = createEntity({
    name: 'mainLayout',
    position: LAYOUT_POSITION,
    rotation: LAYOUT_ROTATION,
    scale: new Vector3(1, 1, 1)
  });
  engine.addEntity(mainLayout);

  const outdoors = createOutdoorsLayout(mainLayout);
  const indoors = createIndoorsLayout(mainLayout);

  // Вначале показываем только внешнюю сцену, интерьер скрываем.
  engine.addEntity(outdoors);
  engine.removeEntity(indoors);

  createTeleport1(outdoors, indoors);
  createTeleport2(indoors, outdoors);
  
  createChildrenOutdoors(outdoors);
  createChildrenIndoors(indoors);
  
  // Likes counter
  const like = new Like(
    {
      position: LIKE_COUNTER_POSITION,
      scale: new Vector3(0.6, 0.6, 0.6)
    },
    LIKE_COUNTER_ID
  )
}
