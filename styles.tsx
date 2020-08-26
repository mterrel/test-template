import Adapt, { Style } from "@adpt/core";
import { NodeService } from "@adpt/cloud/nodejs";

export const aioCloud = (
    <Style>
        {NodeService}
        {Adapt.rule(({ handle, ...props }) => null)}
    </Style>
);

