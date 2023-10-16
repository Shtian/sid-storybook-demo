import type { Meta, StoryObj } from "@storybook/react";

import { Snackbar } from "./Snackbar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Snackbar> = {
  title: "Sid/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const neutral: Story = {
  args: {
    variant: "neutral",
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
