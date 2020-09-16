import React from "react";
import {
    Stack,
    IStackTokens,
    IStackStyles,
    IStackItemStyles,
} from "@fluentui/react";
import Nav from "./Nav";

const stackItemStyles: IStackItemStyles = {
    root: {
        display: "flex",
        overflow: "hidden",
    },
};
const nonShrinkingStackItemStyles: IStackItemStyles = {
    root: {
        display: "flex",
        overflow: "hidden",
        width: 500,
    },
};

const horizontalStackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 10,
};

const stackStyles: IStackStyles = {
    root: {
        overflow: "hidden",
        width: `100%`,
    },
};

export default function() {
    return (
        <Stack horizontal styles={stackStyles} tokens={horizontalStackTokens}>
            <Stack.Item grow styles={stackItemStyles}>
                <Nav />
            </Stack.Item>
            <Stack.Item grow disableShrink styles={nonShrinkingStackItemStyles}>
                // TODO
            </Stack.Item>
            <Stack.Item grow styles={stackItemStyles}>
                // TODO
            </Stack.Item>
        </Stack>
    );
}
