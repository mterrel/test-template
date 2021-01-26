import Adapt from "@adpt/core";
import { NodeService } from "@adpt/cloud/nodejs";
import { aioCloud } from "./styles";

const srcDir = process.env.ADAPTABLE_SOURCE_REPO;
if (!srcDir) throw new Error(`ADAPTABLE_SOURCE_REPO must be defined`);

const App = () => <NodeService srcDir={srcDir} />;

Adapt.stack("default", <App />, aioCloud);

