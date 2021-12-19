import resources from '../../resources'
import * as utils from '@dcl/ecs-scene-utils'
const sceneMessageBus = new MessageBus()

export class Like extends Entity {
  /**
  * Creates a like
  * @param transform - instance new Transofrm
  * @param scene_id - scene id from database
  * @param isBillboard - disable billboard mode (optionaly)
  */
  constructor(
    transform: TranformConstructorArgs,
    scene_id: string,
    isBillboard?: boolean | true,
  ) {
    super()
    engine.addEntity(this)

    this.addComponent(new GLTFShape(resources.heart))
    this.addComponent(new Transform(transform))

    // Like counter (textshape)
    const likeCount = new Entity()
    likeCount.setParent(this)
    // Add +y coordinate relatively Heart model
    likeCount.addComponent(new Transform({position: new Vector3(0, 1.5, 0)}))

    // Create TextShape
    likeCount.addComponent(new TextShape("0"))
    likeCount.getComponent(TextShape).color = Color3.White()
    likeCount.getComponent(TextShape).fontSize = 6;
    
    // Billboard
    if (isBillboard === false) {
        likeCount.removeComponent(new Billboard())
    } else likeCount.addComponent(new Billboard())
    
    // Set currently likes
    async function getLikes() {
      let response = await utils.sendRequest(`https://art-fest-server.herokuapp.com/scenes/${scene_id}`)
      response.like
      likeCount.getComponent(TextShape).value = response.like
    }
    getLikes()

    // OnPointerDown handler
    this.addComponent(
      new OnPointerDown(
        () => {
            async function addLike() { await utils.sendRequest(`https://art-fest-server.herokuapp.com/scenes/${scene_id}/update`, 'PUT', {'Content-type': 'application/json'}) }
            addLike()
            sceneMessageBus.emit("updateLikes", {})
        }, { hoverText: 'Like' }
      ))
    
    sceneMessageBus.on("updateLikes", () => {
        let amount: string = likeCount.getComponent(TextShape).value
        let number = Number(amount)
        number++
        amount = number.toString()
        likeCount.getComponent(TextShape).value = amount
    })
  }
}