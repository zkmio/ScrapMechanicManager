
import { BiRegularCollapseAlt, BiSolidDashboard } from "solid-icons/bi";
import { For, Component } from "solid-js";
import { Dynamic } from "solid-js/web";
import { bucket, Bucket, Consumer, indexOf, names } from "solid-new-bucket";
import { RouteEntry, routes } from "./routes";

interface Props {
  onSelect: Consumer<number>
}

export function Sidebar(props: Props) {
  const collapsed = bucket(false);
  const selected = bucket(1, {
    afterUpdate: v => props.onSelect(v)
  });

  const changeState = () => {
    collapsed(old => !old);
  };

  return (
    <div class={
      names("relative flex flex-col gap-2 p-2 text-zinc-400 h-full",
        "backdrop-blur-md transition-all bg-gray-100 rounded-md drop-shadow")
    }>
      <For each={routes}>{(item, idx) => (
        <Item idx={idx()} def={item} selected={selected} collapsed={collapsed} />
      )}</For>

      <div class="">
        <button class={
          names("btn btn-sm btn-wide btn-ghost", collapsed() ? "w-8" : "w-32")
        } onClick={changeState}>
          <BiRegularCollapseAlt />
        </button>
      </div>
    </div>
  )
}

function Item(props: {
  idx: number;
  def: RouteEntry;
  selected: Bucket<number>;
  collapsed: Bucket<boolean>;
}) {
  return (
    <div class={names(
      "flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer overflow-hidden font-semibold",
      props.selected() === props.idx ? "bg-blue-500 text-white" : "hover:bg-blue-400 hover:text-white text-zinc-500",
      props.collapsed() ? "w-8 py-1" : "w-32"
    )} onClick={() => {
      if (props.selected() !== props.idx) {
        props.selected(props.idx);
      }
    }}>
      <Dynamic component={props.def.icon} />
      <span class={names("select-none")}>
        {props.def.label}
      </span>
    </div>
  )
}