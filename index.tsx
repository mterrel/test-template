import Adapt, { Group, handle } from "@adpt/core";

import { UrlRouter } from "@adpt/cloud/http";
import { NodeService, ReactApp } from "@adpt/cloud/nodejs";
import { Postgres } from "@adpt/cloud/postgres";
import { k8sTestStyle } from "./styles";

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

        <ReactApp handle={app} srcDir="../frontend" />

        <NodeService handle={api} srcDir="../backend" connectTo={pg} />

        <Postgres handle={pg} />

    </Group>;
}

Adapt.stack("default", <App />, k8sTestStyle());

