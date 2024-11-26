import { Provider } from "react-redux"
// import { CounterView } from "./CounterView"
// import { counterStore } from "./CounterStore"
import { factStore} from "./factorial/FactStore"
import { FactView} from "./factorial/FactView"
// import { EOView } from "./EvenOdd/EOView"
export function ReduxProvider() {
    return (<>
        <Provider store={factStore}>
            {/* <CounterView /> */}
            {/* <EOView/> */}
            <FactView/>
        </Provider>
    </>)
}