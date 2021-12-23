import { shapesMap } from '../localConsts/resources';
import { setPosition} from '../utils/objectsUtils'

const sceneMessageBus = new MessageBus()
const server = 'https://art-fest-server.herokuapp.com/scenes/'

export class Like extends Entity {
  constructor(
    transform: TranformConstructorArgs,
    scene_id: string
  ) {
    super()
    engine.addEntity(this)

    this.addComponent(new GLTFShape(shapesMap.heart))
    this.addComponent(new Transform(transform))
    this.addComponent(new Billboard())
    
    // Like counter
    const likeCount = new Entity()
    likeCount.setParent(this)
    likeCount.addComponent(new Billboard())
    
    // Add +y coordinate relatively Heart model
    likeCount.addComponent(new Transform({position: setPosition(0, 1.5, 0)}))
    
    // Get  current likes
    async function getLike() {
      let url = server + scene_id // https://art-fest-server.herokuapp.com/scenes/scene_id
      let response = await fetch(url)
      let json = await response.json()
      let data = json
      // Change TextSape to current likes
      likeCount.getComponent(TextShape).value = data.like
    }
    getLike()
    
    // Loading
    likeCount.addComponent(new TextShape("Loading"))
    likeCount.getComponent(TextShape).color = Color3.White()
    likeCount.getComponent(TextShape).fontSize = 6;
    
    let isShow = false

    // OnPointerDown
    this.addComponent(
      new OnPointerDown(
        () => {
            // On the server side, sending this request increases the like by 1
            async function addLike() {
              try {
                let url = server + scene_id + '/update'
                let response = await fetch(url, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                })
                return response.json()
              } catch (e: any) {
                log('Error', e.message)
              }
            }
            addLike()
            // Call message bus
            sceneMessageBus.emit("updateLikeCounter", {})
        },
        { hoverText: 'Like' }
      )
    )
    
    // Message bus
    sceneMessageBus.on("updateLikeCounter", () => {
        // Get value
        let amount: string = likeCount.getComponent(TextShape).value
        // Parse to Number
        let number = Number(amount)
        // Increment
        number++
        // Parse to String
        likeCount.getComponent(TextShape).value = number.toString()
    })
  }
}