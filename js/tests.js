import { onLoginSuccess } from "./tests/onLoginSuccess.js";
import { Tests } from "./commom/Tests.js";
import { sources } from "./sources.js";
import { onLoginFail } from "./tests/onLoginFail.js";
import { stepsSuccess } from "./tests/stepsSuccess.js";
import { ajaxTest } from "./tests/ajaxTest.js";

var cases = [
    //ajaxTest
    //stepsSuccess,
    onLoginSuccess,
    //onLoginFail
];

new Tests(cases, sources).run();