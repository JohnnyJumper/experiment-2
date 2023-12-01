import { computed, effect, signal } from "@preact/signals-react";

export type Item = {
  id: number;
  vendorCode: number;
  name: string;
};

export type TableData = {
  width: number;
  height: number;
  length: number;
  items: Item[];
};

const LS_TABLE = "LS_TABLE";
const getTableDataFromLS = () => {
  const rawData = localStorage.getItem(LS_TABLE);
  if (!rawData) {
    return [];
  }

  return JSON.parse(rawData);
};

export const tableData = signal<TableData[]>(getTableDataFromLS());

export const itemNames = computed(() => {
  return tableData.value.map((tableEntry) =>
    tableEntry.items.map((item) => item.name),
  );
});

effect(() => {
  localStorage.setItem(LS_TABLE, JSON.stringify(tableData.value));
});
