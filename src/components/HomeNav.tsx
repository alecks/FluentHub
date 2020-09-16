import React from "react";
import {
    Nav,
    INavLinkGroup,
    IRenderGroupHeaderProps,
    Stack,
    IStackTokens,
    SearchBox,
    IStackStyles,
    IStackItemStyles,
} from "@fluentui/react";
import Icons from "../icons";

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

class RepoListItem {
    /**
     * @param name The name of the repository. A URL will be constructed from this.
     * @param priv Whether or not the repository is private. This will change the icon.
     */
    constructor(public name: string, public priv = false) {}

    obj = {
        name: this.name,
        url: (new URL("/" + this.name, window.location.origin)).toString(),
        key: "repo_" + this.name,
        icon: this.priv ? Icons.PrivateRepository : Icons.Repository,
    };
}

const navLinkGroups: INavLinkGroup[] = [
    {
        name: "Repositories",
        links: [
            new RepoListItem("alexeek/FluentHub").obj,
            new RepoListItem("microsoft/fluentui").obj,
            new RepoListItem("microsoft/TypeScript").obj,
            new RepoListItem("alexeek/private-repo", true).obj,
        ],
    },
    {
        name: "Teams",
        links: [
            { name: "open-slicer/some-team", url: "https://example.com", key: "todo1", icon: Icons.Team }, // TODO: make class
        ],
    },
];

function onRenderGroupHeader(group?: IRenderGroupHeaderProps): JSX.Element {
    return <h3>{group?.name}</h3>;
}

const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

const stackStyles: IStackStyles = {
    root: {
        overflow: "hidden",
        width: `100%`,
    },
};

export default function HomeNav() {
    return (
        <Stack horizontal styles={stackStyles} tokens={horizontalStackTokens}>
            <Stack.Item grow styles={stackItemStyles}>
                <Stack tokens={stackTokens}>
                    <SearchBox placeholder="Search repositories" onSearch={console.log} />
                    <Nav
                        onRenderGroupHeader={onRenderGroupHeader}
                        ariaLabel="Repository and team navigation"
                        groups={navLinkGroups}
                    />
                </Stack>
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
