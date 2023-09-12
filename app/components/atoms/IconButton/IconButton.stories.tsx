import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { Camera } from "lucide-react";

const meta = {
  title: "Components/Atoms/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    Icon: {
      control: false,
    },
    disabled: {
      description: "Disabled state for button. By default it is `false`",
      control: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: "Envie uma foto",
    Icon: Camera,
  },
};
