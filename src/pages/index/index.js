import { getPage } from "../../shared/lib/index.js";

export default () => {

    return getPage({
        title: "Главная",
        body: `
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                    <li>
                        <a href="/components.html">Компоненты</a>
                    </li>
                </ul>
            </nav>
        `
    })
}