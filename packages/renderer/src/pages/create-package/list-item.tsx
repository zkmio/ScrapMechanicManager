import { ParentProps } from "solid-js";

export function ListItem(props: ParentProps) {
  return (
    <div class="p-2 select-none transition-all duration-75 cursor-pointer rounded-md
       hover:bg-gray-300 active:bg-gray-500 active:text-gray-100">
      {props.children}
    </div>
  )
}