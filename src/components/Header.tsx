import React from "react";
import Icons from "../icons";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react";

export default function Header() {
    return (
        <header>
            <CommandBar
                items={items}
                farItems={farItems}
                ariaLabel="Use left and right arrow keys to navigate between commands"
            />
        </header>
    );
}

const items: ICommandBarItemProps[] = [
    {
        key: "newItem",
        text: "New",
        iconProps: { iconName: "Add" },
        subMenuProps: {
            items: [
                {
                    key: "newRepository",
                    text: "Repository",
                    iconProps: { iconName: Icons.Repository },
                },
                {
                    key: "newGist",
                    text: "Gist",
                    iconProps: { iconName: Icons.Gist },
                },
                {
                    key: "newOrganisation",
                    text: "Organisation",
                    iconProps: { iconName: Icons.Organisation },
                },
                {
                    key: "newProject",
                    text: "Project",
                    iconProps: { iconName: Icons.Project },
                },
            ],
        },
    },
    {
        key: "importItem",
        text: "Import",
        iconProps: { iconName: Icons.Import },
        subMenuProps: {
            items: [
                {
                    key: "importRepository",
                    text: "Repository",
                    iconProps: { iconName: Icons.Repository },
                },
            ],
        },
    },
];

const farItems: ICommandBarItemProps[] = [
    {
        key: "pullRequests",
        text: "Pull requests",
        ariaLabel: "Pull requests",
        iconOnly: true,
        iconProps: { iconName: Icons.PullRequest },
        onClick: () => console.log("PRs"),
    },
    {
        key: "issues",
        text: "Issues",
        ariaLabel: "Issues",
        iconOnly: true,
        iconProps: { iconName: Icons.Issues },
        onClick: () => console.log("Issues"),
    },
    {
        key: "inbox",
        text: "Inbox",
        ariaLabel: "Inbox",
        iconOnly: true,
        iconProps: { iconName: Icons.Inbox },
        onClick: () => console.log("Inbox"),
    },
];
