# Art Park

## Запуск сцены

Чтобы запустить сцену введите команду

```sh
dcl start
```

Все сцены разбиты по отдельным модулям (папкам). Чтобы перенести свою сцену необходимо в папке "src/scenes" создать папку с названием своей сцены.

Все ресурсы (звуки, модели, ui) закидываются в папку с названием сцены, где они используются и хранятся в общих папках "sounds", "models", "images" в корне проекта. То есть эти папки в "src/scenes/*название вашей сцены*" создавать не нужно, единственное что нужно, так это создать файл "rescources.ts" в папке своей сцены, чтобы удобно добавлять модели и звуки.
```ts
export default {
  heart: 'models/digital-temple/heart.glb'
}
```

Рассмотрим пример со сценой Digital Temple:
1) Создал папку своей сцены
2) Добавил необходимые компоненты в папку "src/scenes/digital-temple/components"
3) В файле "main.ts" в папке своей сцены создал функцию, которая экскортирует всю мою сцену.
```ts
import { Like } from "./components/Like/Like"

export function createDigitalTemple(): void {
    const text = new Entity
    engine.addEntity(text)
    text.addComponent(new TextShape('Test'))
    text.getComponent(TextShape).fontSize = 6
    text.getComponent(TextShape).color = Color3.White()
    text.addComponent(new Transform({position: new Vector3(3, 1, 3)}))

    const like = new Like(
        {position: new Vector3(5, 1, 5)},
        '61b905d2dd08def8380abab9'
    )
}
```
4) Импортирую полностью готовую сцену в "game.ts"
```ts
import { createDigitalTemple } from "./scenes/digital-temple/main";

createDigitalTemple()
```

Все координаты составляются согласно ген.плану
Начало координат в точке спавна Аватара (самый нижний левый парсель)

## License
MIT
