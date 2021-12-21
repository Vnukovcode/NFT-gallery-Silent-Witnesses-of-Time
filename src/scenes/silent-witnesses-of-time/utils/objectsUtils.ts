// Параметры сущности (модель, вправо, вверх, вдаль).
export interface ICreateEntityParams extends TransformConstructorArgs {
  name?: string;
  shape?: Shape;
  shapeSource?: string;
  parent?: Entity;
}

// Создание формы объекта.
export function createShape (shapeSource: string): GLTFShape {
  const shape = new GLTFShape(shapeSource);

  shape.withCollisions = true;
  shape.isPointerBlocker = true;
  shape.visible = true;

  return shape;
} 

export function createNFTShape (shapeSource: string, color?: Color3): NFTShape {
    const shape = new NFTShape(shapeSource);
    shape.withCollisions = true
    shape.isPointerBlocker = true
    shape.visible = true
    if (color) {
        shape.color = color;
    }

    return shape;
};

// Создание сущности (модель, вправо, вверх, вдаль).
export function createEntity({ shape, position, rotation, scale, name, shapeSource, parent }: ICreateEntityParams) {
  // create the entity
  const entity = new Entity(name);

  // set a parent to the entity
  if (parent) {
    entity.setParent(parent)
  }

  // add a transform to the entity
  entity.addComponent(new Transform({ position, rotation, scale }));

  // add a shape to the entity
  if (shape) {
    entity.addComponent(shape);
  } else if (shapeSource) {
    entity.addComponent(createShape(shapeSource));
  }

  return entity;
}

export function setPosition (x: number, y: number, z: number) {
  return new Vector3(x, y, z);
}
