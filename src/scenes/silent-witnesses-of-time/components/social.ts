import { socialShapesMap } from "../localConsts/resources";

interface ICreateSocialLinkParams extends TransformConstructorArgs {
    type: ESocialLinkType;
    url: string;
    parent: Entity;
    name?: string;
}

export enum ESocialLinkType {
    TWITTER = 'TWITTER',
    GIT_HUB = 'GIT_HUB',
    INSTAGRAM = 'INSTAGRAM'
}

const shapeTypesMap = {
    [ESocialLinkType.TWITTER]: socialShapesMap.twitter,
    [ESocialLinkType.GIT_HUB]: socialShapesMap.github,
    [ESocialLinkType.INSTAGRAM]: socialShapesMap.instagram,
}

export function createSocialLink ({ type, url, parent, name, position, rotation, scale }: ICreateSocialLinkParams): Entity {
    const entityName = name || url;
    const entity = new Entity(entityName);

    entity.addComponent(new GLTFShape(shapeTypesMap[type]));
    entity.addComponent(new Transform({ position, rotation, scale }));
    entity.setParent(parent);

    entity.addComponent(
        new OnPointerDown(
            () => openExternalURL(url),
            {
                button: ActionButton.PRIMARY,
                hoverText: entityName,
            }
        )
    );

    return entity;
}