import type { Meta, StoryObj } from "@storybook/react";
import "@/app/globals.css";

import { NotAuthHomeScreen } from "./page";

const meta = {
  title: "Example/NotAuthHomeScreen",
  component: NotAuthHomeScreen,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NotAuthHomeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};
