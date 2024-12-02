import { bucket } from "solid-new-bucket";
import { Tabs } from "./tabs";
import { ComponentList } from "./component-list";

export function WorkshopContentComponents() {
  const tab = bucket("Tools");
  
  return (
    <div class="bg-gray-100 w-full h-full rounded-md drop-shadow
      flex flex-col p-2 gap-2 overflow-y-auto">
      
      <div class="flex gap-2 w-full">
        <Tabs items={["All", "Tools", "Blocks", "Interactable", "Parts", "Consumable"]}
          onSelect={tab} />
      </div>
      
      <ComponentList />
    </div>
  )
}