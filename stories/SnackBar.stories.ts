import type { Meta, StoryObj } from "@storybook/react";

import { SnackBar } from "./SnackBar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SnackBar> = {
  title: "Example/SnackBar",
  component: SnackBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SnackBar>;

export const notice: Story = {
  args: {
    variant: "notice",
    children: "Preparing document",
  },
};

export const success: Story = {
  args: {
    variant: "success",
    children: "Success message!",
  },
};

export const error: Story = {
  args: {
    variant: "error",
    children: "Error message!",
  },
};
