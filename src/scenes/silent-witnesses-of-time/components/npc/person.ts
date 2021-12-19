import {NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { config } from './config'
import { PersonDialog } from './dialog'
import { shapesMap } from '../../consts/consts';

export const person = new NPC(
  {position: config.position, rotation: config.rotation},
  shapesMap.person,
  () => {
    // animations
    person.playAnimation('Hello', true, 2)

    let dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
        person.playAnimation('Talk')
      })
    )
    engine.addEntity(dummyent)

    // sound
    person.addComponentOrReplace(new AudioSource(new AudioClip('sounds/monk.mp3')))
    person.getComponent(AudioSource).playOnce()

    // dialog UI
    person.talk(PersonDialog)
  },
  {
    faceUser: true,
    hoverText: config.hovertext,
    reactDistance: config.reactDistance,
    portrait: {
      path: config.portraits,
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512,
      },
    },
    onWalkAway: () => {
      person.playAnimation('Goodbye', true, 2)
    },
  }
)