import "./style.pcss"
import { worker } from "../shared/api/browser"

worker.start({ onUnhandledRequest: "bypass" })
