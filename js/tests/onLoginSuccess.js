import { LoginCtrl } from "../controllers/LoginCtrl.js";
import { ModelTest } from "../commom/ModelTest.js";
import { LoginModel } from "../models/LoginModel.js";

export var onLoginSuccess = {
    name: "onLoginSuccess",
    run: () => {
        var loginCtrl = new LoginCtrl();
        loginCtrl.login = new ModelTest(new LoginModel("leonardo","123456"));
        var view = loginCtrl.on_click();
        view.test(()=>{
            if (view.constructor.name === "NavigateView") {
                assert(true, "onLoginSuccess");
            }
            else {
                assert(false, "onLoginSuccess");
            }
        });
        
    }
}