"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { ArrowLeftIcon } from "lucide-react";
import { input } from "motion/react-client";

type Card = {
  id: string;
  title: string;
};

type Column = {
  id: string;
  title: string;
  cards: Card[];
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([
    { id: "col-1", title: "To Do", cards: [] },
    { id: "col-2", title: "In Progress", cards: [] },
    { id: "col-3", title: "Done", cards: [] },
  ]);

  const addCard = (columnId: string) => {
    const newCard = {
      id: crypto.randomUUID(),
      // title: <input type="text" name="" id="" />
      title: "",
    };

    setColumns((prev) =>
      prev.map((col) => {
        if (col.id === columnId) {
          return { ...col, cards: [...col.cards, newCard] };
        }
        return col;
      })
    );
  };

  const removeCard = (currentColumnId: string) => {
    const columnIndex = columns.findIndex((col) => col.id === currentColumnId);

    if (columnIndex <= 0) return;

    const cards = columns[columnIndex].cards;
    if (cards.length === 0) return;

    const cardToMove = cards[cards.length - 1];

    const updatedColumns = [...columns];

    updatedColumns[columnIndex].cards = cards.slice(0, -1);

    updatedColumns[columnIndex - 1].cards.push(cardToMove);

    setColumns(updatedColumns);
  };

  return (
    <div className="flex flex-row gap-6 overflow-x-auto p-4 h-full w-full">
      {columns.map((col) => (
        <div
          key={col.id}
          className="min-w-[300px] bg-gray-100 dark:bg-gray-900 rounded-lg p-4 flex flex-col gap-4 shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <h2 className="font-bold text-gray-700 dark:text-gray-200">
              {col.title}
            </h2>
            <span className="text-xs text-gray-400 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full">
              {col.cards.length}
            </span>
          </div>

          <div className="flex flex-col gap-3 flex-1 overflow-y-auto min-h-[100px]">
            {col.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-colors cursor-pointer"
              >
                {card.title}
              </div>
            ))}
          </div>

          <button
            onClick={() => addCard(col.id)}
            className="w-full py-2 mt-auto  border-gray-300 dark:border-gray-700 text-gray-500 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:text-blue-500 transition-all text-sm font-medium"
          >
            + Add Card
          </button>

          <button
            className=" hover:text-blue-500 transition-all text-sm font-medium"
            variant="outline"
            size="icon"
            aria-label="Go Back"
            onClick={() => removeCard(col.id)}
          >
            <ArrowLeftIcon />{" "}
          </button>
        </div>
      ))}
    </div>
  );
}
