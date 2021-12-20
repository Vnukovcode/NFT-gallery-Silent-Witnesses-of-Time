import { Dialog, NPC } from '@dcl/npc-scene-utils';

export function getPersonDialog (person: NPC): Dialog[] {
  return [
    // #0
    {
      text: "Hi, I'm Monk - welcome to NFT Art Gallery \"Silent Witnesses of Time\"",
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
      text: "An image at the intersection of architecture and art object.",
    },
    // #4
    {
      text: "You climb the steps of the pedestal, like the Spanish conquistador who first entered the steps of the ancient temple of the Incas.",
    },
    // #5
    {
      text: "On the upper landing you will find a teleporter. This is the bifurcation point.",
    },
    // #6
    {
      text: "Here everyone decides for himself: to walk by or take a red pill from Morpheus and see how deep the rabbit hole is...",
      triggeredByNext: () => person.playAnimation('Goodbye', true, 2),
      isEndOfDialog: true,
    }
  ]
}