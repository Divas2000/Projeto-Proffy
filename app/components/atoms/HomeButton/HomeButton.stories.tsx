import type { Meta, StoryObj } from "@storybook/react";
import "@/app/globals.css";

import { HomeButton } from "./HomeButton";
import { Airplay } from "lucide-react";
import { BookOpen } from "lucide-react";

const meta = {
  title: "Example/Button",
  component: HomeButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof HomeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: "bg-pink-300",
    label: "Dar aulas",
    onClick: Function,
    Icon: Airplay,
  },
};
export const Secondary: Story = {
  args: {
    backgroundColor: "bg-purple-500",
    label: "Estudar",
    onClick: Function,
    Icon: BookOpen,
  },
};
