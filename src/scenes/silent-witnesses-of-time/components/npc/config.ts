import { portraitsMap } from '../../consts/consts'

export const config = {
    hovertext: 'Talk with me',
    reactDistance: 3,
    portraits: portraitsMap.person,
    audioClip: 'sounds/monk.mp3',
    position: new Vector3(16, 1.5, 20),
    rotation: Quaternion.Euler(0, 180, 0)
}