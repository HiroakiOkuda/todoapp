import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { Todo } from "./todo.type";

const state = {
  todos: [
    {
      id: 1,
      title: "Title1",
      description: "Description1",
      status: 1,
      due: "2023-02-05",
    },
    {
      id: 2,
      title: "Title2",
      description: "Description2",
      status: 2,
      due: "2023-02-08",
    },
    {
      id: 3,
      title: "Title3",
      description: "Description3",
      status: 3,
      due: "2023-02-11",
    },
    {
      id: 4,
      title: "Title4",
      description: "Description4",
      status: 1,
      due: "2023-02-26",
    },
    {
      id: 5,
      title: "Title5",
      description: "Description5",
      status: 2,
      due: "2023-02-24",
    },
    {
      id: 6,
      title: "Title6",
      description: "Description6",
      status: 3,
      due: "2023-02-22",
    },
    {
      id: 7,
      title: "Title7",
      description: "Description7",
      status: 2,
      due: "2023-02-11",
    },
    {
      id: 8,
      title: "Title8",
      description: "Description8",
      status: 1,
      due: "2023-02-14",
    },
    {
      id: 9,
      title: "Title9",
      description: "Description9",
      status: 1,
      due: "2023-02-01",
    },
    {
      id: 10,
      title: "Title10",
      description: "Description10",
      status: 2,
      due: "2023-02-18",
    },
    {
      id: 11,
      title: "Title11",
      description: "Description11",
      status: 1,
      due: "2023-02-17",
    },
    {
      id: 12,
      title: "Title12",
      description: "Description12",
      status: 1,
      due: "2023-02-07",
    },
    {
      id: 13,
      title: "Title13",
      description: "Description13",
      status: 3,
      due: "2023-02-01",
    },
    {
      id: 14,
      title: "Title14",
      description: "Description14",
      status: 2,
      due: "2023-02-02",
    },
    {
      id: 15,
      title: "Title15",
      description: "Description15",
      status: 1,
      due: "2023-02-15",
    },
    {
      id: 16,
      title: "Title16",
      description: "Description16",
      status: 3,
      due: "2023-02-26",
    },
    {
      id: 17,
      title: "Title17",
      description: "Description17",
      status: 2,
      due: "2023-02-28",
    },
    {
      id: 18,
      title: "Title18",
      description: "Description18",
      status: 1,
      due: "2023-02-19",
    },
    {
      id: 19,
      title: "Title19",
      description: "Description19",
      status: 2,
      due: "2023-02-13",
    },
    {
      id: 20,
      title: "Title20",
      description: "Description20",
      status: 1,
      due: "2023-02-15",
    },
    {
      id: 21,
      title: "Title21",
      description: "Description21",
      status: 3,
      due: "2023-02-21",
    },
    {
      id: 22,
      title: "Title22",
      description: "Description22",
      status: 2,
      due: "2023-02-18",
    },
    {
      id: 23,
      title: "Title23",
      description: "Description23",
      status: 2,
      due: "2023-02-19",
    },
    {
      id: 24,
      title: "Title24",
      description: "Description24",
      status: 1,
      due: "2023-02-23",
    },
    {
      id: 25,
      title: "Title25",
      description: "Description25",
      status: 2,
      due: "2023-02-25",
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: state,
  reducers: {
    
  }
})