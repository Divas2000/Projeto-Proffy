import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ClipboardEdit } from "lucide-react";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      description: "Disabled state for button. By default it is `false`",
      control: "boolean",
      table: {
        defaultValue: { summary: false },
      },
    },
    Icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Fazer login",
  },
};

export const Medium: Story = {
  args: {
    label: "Entrar em contato",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    label: "Entrar",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    label: "Entrar",
    size: "lg",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Entrar",
    size: "lg",
    isLoading: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Editar",
    Icon: ClipboardEdit,
  },
};
