import { Tests } from "./commom/Tests.js"
import { sources } from "./views/sources.js"
import { AjaxTest } from "./tests/AjaxTest.js"
import { LoginTest } from "./tests/LoginTest.js"

var cases = [
    new AjaxTest(),
    new LoginTest()
]

new Tests(cases, sources).run();