import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Atoms/Card/Footer",
  component: Card.Footer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    padding: {
      controls: "radio",
      options: ["md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  args: {
    padding: "md",
  },
  decorators: [
    (Story) => (
      <Card.Root>
        <Story />
      </Card.Root>
    ),
  ],
} satisfies Meta<typeof Card.Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Card Footer",
  },
};

export const LargePadding: Story = {
  args: {
    children: "Card Footer",
    padding: "lg",
  },
};
