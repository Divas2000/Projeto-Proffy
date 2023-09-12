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
      options: ["pink", "purple"],
      control: "select",
    },
    Icon: {
      control: false,
    },
  },
} satisfies Meta<typeof HomeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: "pink",
    label: "Dar aulas",
    onClick: Function,
    Icon: Airplay,
  },
};
export const Secondary: Story = {
  args: {
    backgroundColor: "purple",
    label: "Estudar",
    onClick: Function,
    Icon: BookOpen,
  },
};
