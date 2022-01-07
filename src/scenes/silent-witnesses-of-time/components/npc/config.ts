import { portraitsMap, audioMap } from '../../localConsts/resources';
import { NPC_POSITION, NPC_ROTATION } from '../../consts';

export const config = {
    hovertext: 'Talk with me',
    reactDistance: 3,
    portraits: portraitsMap.person,
    audioClip: audioMap.person,
    position: NPC_POSITION,
    rotation: NPC_ROTATION
}