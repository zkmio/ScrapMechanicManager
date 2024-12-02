import { ListItem } from "./list-item";


export function WorkshopContentList() {
  return (
    <div class="bg-gray-100 w-full max-w-sm h-full rounded-md drop-shadow
      flex flex-col p-2 overflow-y-auto">
      <ListItem>NPC Control</ListItem>
      <ListItem>Plats by Lord Pain</ListItem>
    </div>
  )
}