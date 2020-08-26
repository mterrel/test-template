import Adapt, { Style } from "@adpt/core";
import { Service } from "@adpt/cloud";

export const aioCloud = (
    <Style>
        {Service}
        {Adapt.rule<ServiceProps>(({ handle, ...props }) => null}
    </Style>
);

