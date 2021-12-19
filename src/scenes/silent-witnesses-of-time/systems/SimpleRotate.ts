// Вращение отдельного объекта.
export class SimpleRotateSystem implements ISystem {
    entity: Entity
  
    constructor (entity: Entity) {
      this.entity = entity;
    }
  
    update(dt: number) { 
      let transform = this.entity.getComponentOrNull(Transform);
      transform?.rotate(Vector3.Down(), dt * 10);
    }
  }