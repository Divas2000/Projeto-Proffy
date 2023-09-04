import type { Meta, StoryObj } from "@storybook/react";

import { Airplay, BookOpen } from "lucide-react";
import { HomeButton } from "./HomeButton";

const meta = {
  title: "Components/Atoms/HomeButton",
  component: HomeButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { 
      options: ["bg-pink-300", "bg-purple-500"],
      control: "select"
    },
    Icon: {
      control: false
    },
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
