import { portraitsMap } from '../../consts/consts'
import { VECTOR_OFFSET } from '../../offsets'
import { setPosition } from '../../utils/objectsUtils'

export const config = {
    hovertext: 'Talk with me',
    reactDistance: 3,
    portraits: portraitsMap.person,
    audioClip: 'sounds/monk.mp3',
    position: setPosition(0, 1.5, 4).add(VECTOR_OFFSET),
    rotation: Quaternion.Euler(0, 180, 0)
}