import { ROUTER_NAVIGATION, RouterNavigatedAction } from "@ngrx/router-store";
import { ParamsRouterState } from "../../router.store/params-serializer";

export function actionEnricher(reducer) {
    let activeMemeId;
    return (state, action) => {
        if (action.type === ROUTER_NAVIGATION) {
            debugger;
            const routerAction= action as RouterNavigatedAction<ParamsRouterState>;
            activeMemeId= routerAction.payload.routerState.params && routerAction.payload.routerState.params['id'];
        }
        return reducer (
            state, 
            action.id ? action : { ...action, id: activeMemeId}
        )
    }
}