import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Atoms/Card",
  component: Card.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    () => (
      <Card.Root>
        <Card.Content>Card Content</Card.Content>
        <Card.Footer className="text-center">Card Footer</Card.Footer>
      </Card.Root>
    ),
  ],
} satisfies Meta<typeof Card.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
