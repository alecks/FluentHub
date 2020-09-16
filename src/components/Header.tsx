import React from "react";
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
                    iconProps: { iconName: "ProjectCollection" },
                },
                {
                    key: "newGist",
                    text: "Gist",
                    iconProps: { iconName: "FileCode" },
                },
                {
                    key: "newOrganisation",
                    text: "Organisation",
                    iconProps: { iconName: "BusinessCenterLogo" },
                },
                {
                    key: "newProject",
                    text: "Project",
                    iconProps: { iconName: "BacklogBoard" },
                },
            ],
        },
    },
    {
        key: "importItem",
        text: "Import",
        iconProps: { iconName: "CloudImportExport" },
        subMenuProps: {
            items: [
                {
                    key: "importRepository",
                    text: "Repository",
                    iconProps: { iconName: "ProjectCollection" },
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
        iconProps: { iconName: "BranchPullRequest" },
        onClick: () => console.log("PRs"),
    },
    {
        key: "issues",
        text: "Issues",
        ariaLabel: "Issues",
        iconOnly: true,
        iconProps: { iconName: "IssueTracking" },
        onClick: () => console.log("Issues"),
    },
    {
        key: "inbox",
        text: "Inbox",
        ariaLabel: "Inbox",
        iconOnly: true,
        iconProps: { iconName: "Inbox" },
        onClick: () => console.log("Inbox"),
    },
];
