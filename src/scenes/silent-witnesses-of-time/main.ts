import { showOutdoorsScene, createOutdoorsLayout } from './objects/sceneOutdoors';
import { createIndoorsScene, showIndoorsScene } from './objects/sceneIndoors';
import { Like } from './components/Like';
import { person } from './components/npc/person'; // NPC для встречи гостей

export function createSilentWitnessesOfTimeScene () {
  const outdoorsScene = createOutdoorsLayout();
  const indoorsScene = createIndoorsScene();
  engine.addEntity(outdoorsScene);
  showOutdoorsScene(outdoorsScene);

  // engine.removeEntity(outdoorsScene);

  // engine.addEntity(indoorsScene);
  // showIndoorsScene(indoorsScene);

  const like = new Like(
    {
      position: new Vector3(18.5, 1, 16.5),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(0.6, 0.6, 0.6)
    },
    '61be21382b9ee78dd82fc2d2'
  )
}
