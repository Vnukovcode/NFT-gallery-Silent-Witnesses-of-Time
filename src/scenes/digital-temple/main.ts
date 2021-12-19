import { Like } from "./components/Like/Like"

export function createDigitalTemple(): void {
    const text = new Entity
    engine.addEntity(text)
    text.addComponent(new TextShape('Test'))
    text.getComponent(TextShape).fontSize = 6
    text.getComponent(TextShape).color = Color3.White()
    text.addComponent(new Transform({position: new Vector3(3, 1, 3)}))

    // const like = new Like(
    //     {position: new Vector3(5, 1, 5)},
    //     '61b905d2dd08def8380abab9'
    // )
}