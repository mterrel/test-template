import Adapt, { Group, handle } from "@adpt/core";

import { UrlRouter } from "@adpt/cloud/http";
import { NodeService, ReactApp } from "@adpt/cloud/nodejs";
import { Postgres } from "@adpt/cloud/postgres";
import path from "path";
import { k8sTestStyle } from "./styles";

const targetDir = process.env.TARGET_DIR;
if (!targetDir) throw new Error(`TARGET_DIR must be defined`);

function App() {
    const pg = handle();
    const app = handle();
    const api = handle();

    return <Group>

        <UrlRouter
            port={8080}
            routes={[
                { path: "/api/", endpoint: api },
                { path: "/", endpoint: app }
            ]} />

        <ReactApp handle={app} srcDir={path.join(targetDir, "frontend")} />

        <NodeService handle={api} srcDir={path.join(targetDir, "backend")} connectTo={pg} />

        <Postgres handle={pg} />

    </Group>;
}

Adapt.stack("default", <App />, k8sTestStyle());

