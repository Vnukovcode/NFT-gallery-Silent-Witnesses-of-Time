import { createChildrenOutdoors, createOutdoorsLayout } from './objects/sceneOutdoors';
import { createIndoorsLayout, createChildrenIndoors } from './objects/sceneIndoors';
import { Like } from './components/Like';
import { createTeleport1, createTeleport2 } from './objects/teleport';
import { LIKE_COUNTER_ID, LIKE_COUNTER_POSITION } from './consts';
import { person } from './components/npc/person'; // NPC для встречи гостей

export function createSilentWitnessesOfTimeScene () {
  const outdoors = createOutdoorsLayout();
  const indoors = createIndoorsLayout();

  createTeleport1(outdoors, indoors);
  createTeleport2(indoors, outdoors);
  
  createChildrenOutdoors(outdoors);
  createChildrenIndoors(indoors);

  engine.addEntity(outdoors);
  
  // Likes counter
  const like = new Like(
    {
      position: LIKE_COUNTER_POSITION,
      scale: new Vector3(0.6, 0.6, 0.6)
    },
    LIKE_COUNTER_ID
  )
}
