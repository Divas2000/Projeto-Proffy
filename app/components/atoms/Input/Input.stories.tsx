import type { Meta, StoryObj } from "@storybook/react";
import {
  onlyLettersMask,
  onlyNumbersMask,
  phoneMask,
  timeMask,
} from "@/utils";
import { Input } from "./Input";

const meta = {
  title: "Components/Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    label: "E-mail",
  },
};

export const WithHelperLabel: Story = {
  args: {
    id: "email",
    label: "E-mail",
    helperLabel: "(apenas corporativos)",
  },
};

export const OnlyLettersInput: Story = {
  args: {
    id: "first-name",
    label: "Nome",
    mask: onlyLettersMask,
  },
};

export const OnlyNumbersInput: Story = {
  args: {
    id: "whatsapp",
    label: "Whatsapp",
    mask: onlyNumbersMask,
  },
};

export const PhoneInput: Story = {
  args: {
    id: "whatsapp",
    label: "Whatsapp",
    mask: phoneMask,
  },
};

export const TimeInput: Story = {
  args: {
    id: "hour-end",
    label: "Até",
    mask: timeMask,
  },
};
