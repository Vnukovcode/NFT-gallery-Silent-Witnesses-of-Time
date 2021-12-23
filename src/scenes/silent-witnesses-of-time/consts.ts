const OFFSET_X: number = 16;
const OFFSET_Z: number = 16;

// Отступ сцены относительно начала координат арт-парка.
export const VECTOR_OFFSET = new Vector3(OFFSET_X, 0, OFFSET_Z);

/*
 * Сцена вращается относительно своей нулевой координаты.
 * Пожалуйста, скорректируйте LAYOUT_POSITION, если придётся её крутить.
 */
const LAYOUT_X = 32;
const LAYOUT_Y = 32;
export const LAYOUT_POSITION = new Vector3(LAYOUT_X, 0, LAYOUT_Y).add(VECTOR_OFFSET);
export const LAYOUT_ROTATION = Quaternion.Euler(0, 180, 0);

// Для счётчика лайков.
export const LIKE_COUNTER_POSITION = new Vector3(32, 1, 0.5).add(VECTOR_OFFSET);
export const LIKE_COUNTER_ID = '61be21382b9ee78dd82fc2d2';

// Для NPC-экскурса.
export const NPC_POSITION = new Vector3(31.5, 1.5, 4).add(VECTOR_OFFSET);
export const NPC_ROTATION = Quaternion.Euler(0, 90, 0);
export const NPC_NAME = 'Alice';