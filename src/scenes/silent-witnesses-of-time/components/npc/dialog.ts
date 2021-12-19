import { Dialog } from '@dcl/npc-scene-utils'
import { person } from './person'

export const PersonDialog: Dialog[] = [
  // #0
  {
    text: "Hi, I'm Monk - welcome to Digital Temple",
  },
  // #1
  {
    text: "Would you like to learn more about this place?",
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: 3 },
      { label: 'No', goToDialog: 2 },
    ],
  },
  // #2
  {
    text: "Okay, I'll be around if you get curious!",
    isEndOfDialog: true,
    triggeredByNext: () => person.playAnimation('Goodbye', true, 2),
  },
  // #3
  {
    text: "This is a Digital Temple, like the one that stands in your universe. Like Shwedagon Pagoda.",
  },
  // #4
  {
    text: "This temple is dedicated to the path and all-consuming being. I hope that after passing this path, your horizons will broaden.",
  },
  // #5
  {
    text: "Visit my brother next door, we will be happy with any donation... If, of course, he is still in this Metaverse.",
  },
  // #6
  {
    text: "To start you need to understand the principle of inaction, let go of the situation. It's better not to move, there is nothing to bustle here.",
    triggeredByNext: () => person.playAnimation('Goodbye', true, 2),
    isEndOfDialog: true,
  }
]