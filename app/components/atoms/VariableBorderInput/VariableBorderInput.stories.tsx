import type { Meta, StoryObj } from "@storybook/react";
import { Eye } from "lucide-react";
import { VariableBorderInput } from "./VariableBorderInput";

const meta = {
  title: "Components/Atoms/VariableBorderInput",
  component: VariableBorderInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Input type.",
      options: ["text", "email", "password", "tel"],
      control: "select",
    },
    border: {
      description: "border-radius style based on Tailwind utility classes.",
      options: ["all", "top", "bottom", "none"],
      control: "select",
    },
    Icon: {
      control: false,
    },
  },
} satisfies Meta<typeof VariableBorderInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutIcon: Story = {
  args: {
    id: "email",
    type: "email",
    placeholder: "E-mail",
    border: "all",
  },
};

export const WithIcon: Story = {
  args: {
    id: "password",
    type: "password",
    placeholder: "Senha",
    border: "all",
    Icon: Eye,
    iconOnClick: Function,
  },
};
