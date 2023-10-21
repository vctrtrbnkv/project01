import { getPage } from "../../shared/lib/index.js";

import { Button } from "../../shared/ui/Button/index.js";
import { Input } from "../../shared/ui/Input/index.js";

export default () => {

    return getPage({
        title: "Компоненты",
        body: `
            <div>
                <div>
                    ${Button({ children: "Test" })}
                </div>
                <div>
                    ${Input()}
                </div> 
            </div>
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