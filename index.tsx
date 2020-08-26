import Adapt from "@adpt/core";
import { NodeService } from "@adpt/cloud/nodejs";
import { aioCloud } from "./styles";

const targetDir = process.env.TARGET_DIR;
if (!targetDir) throw new Error(`TARGET_DIR must be defined`);

const App = () => <NodeService srcDir={targetDir} />;

Adapt.stack("default", <App />, aioCloud);

