import { showOutdoorsScene, createOutdoorsLayout } from './objects/sceneOutdoors';
import { createIndoorsScene, showIndoorsScene } from './objects/sceneIndoors';
import { Like } from './components/Like';
import { person } from './components/npc/person'; // NPC для встречи гостей
import { createTeleport } from './objects/teleport';
import { setPosition } from './utils/objectsUtils';
import { VECTOR_OFFSET } from './offsets';

export function createSilentWitnessesOfTimeScene () {
  const outdoorsScene = createOutdoorsLayout();
  const indoorsScene = createIndoorsScene();
  engine.addEntity(outdoorsScene);
  engine.addEntity(indoorsScene);
  
  showOutdoorsScene(outdoorsScene);
  // showIndoorsScene(indoorsScene);

  // engine.removeEntity(indoorsScene);

  // Teleport
  const teleport = createTeleport()
  teleport.addComponent(
    new OnPointerDown(
      (e) => {
        engine.removeEntity(outdoorsScene)

        // if (!indoorsScene.alive) {
        //   log('indoors dead')
        // }
        showIndoorsScene(indoorsScene);
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
