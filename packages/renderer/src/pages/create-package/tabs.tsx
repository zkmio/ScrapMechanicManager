import { For } from "solid-js";
import { Consumer, bucket, names } from "solid-new-bucket";

export function Tabs(props: {
  items: string[];
  onSelect: Consumer<string>;
}) {
  const selected = bucket(0, {
    afterUpdate: v => props.onSelect(props.items[v])
  });
  return (
    <div class="flex w-full gap-1 bg-gray-300 rounded-2xl">
      <For each={props.items}>{(item, idx) => (
        <div class={names("flex items-center px-2 py-1 rounded-2xl font-semibold text-sm transition-all duration-75 cursor-pointer select-none",
          selected() === idx() ? "bg-orange-400 text-white" : "text-gray-500 hover:bg-gray-400 hover:text-gray-300 active:bg-orange-400 active:text-white")}
          onClick={() => selected(idx())}>
          {item}
        </div>
      )}</For>
    </div>
  )
}