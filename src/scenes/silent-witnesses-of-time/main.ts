import { showOutdoorsScene, createOutdoorsLayout } from './objects/sceneOutdoors';
import { createIndoorsScene, showIndoorsScene } from './objects/sceneIndoors';
import { Like } from './components/Like';
import { person } from './components/npc/person'; // NPC для встречи гостей

export function createSilentWitnessesOfTimeScene () {
  const outdoorsScene = createOutdoorsLayout();
  const indoorsScene = createIndoorsScene();
  engine.addEntity(outdoorsScene);
  engine.addEntity(indoorsScene);
  
  showOutdoorsScene(outdoorsScene);

  // Create an entity
  const box = new Entity()
  
  // Create and add a `Transform` component to that entity
  box.addComponent(new Transform())
  
  // Set the fields in the component
  box.getComponent(Transform).position.set(32, 2.4, 32)
  
  // Create and apply a `BoxShape` component to give the entity a visible form
  box.addComponent(new BoxShape())
  box.addComponent(
    new OnPointerDown(
      (e) => {
        engine.removeEntity(outdoorsScene)
        showIndoorsScene(indoorsScene)
      },
      { button: ActionButton.POINTER }
    )
  )
  
  engine.addEntity(box);
  
  const like = new Like(
    {
      position: new Vector3(18.5, 1, 16.5),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(0.6, 0.6, 0.6)
    },
    '61be21382b9ee78dd82fc2d2'
  )
}
