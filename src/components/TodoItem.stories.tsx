import type { Meta, StoryObj } from "@storybook/react";
import { TodoItem } from "./TodoItem";

const meta = {
  title: "Todo/TodoItem",
  component: TodoItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    completed: { control: "boolean" },
  },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "1",
    text: "Learn Storybook",
    completed: false,
  },
};

export const Completed: Story = {
  args: {
    id: "2",
    text: "Write a story for TodoItem",
    completed: true,
  },
};

export const WithMarkdown: Story = {
  args: {
    id: "3",
    text: "This is a **Markdown** enabled *todo* item.",
    completed: false,
  },
};