import { FaSolidCartPlus } from "solid-icons/fa";
import { bucket } from "solid-new-bucket";
import { ListItem } from "./list-item";
import { Tabs } from "./tabs";
import { PickComponentsModal } from "./pick-components-modal";
import { openModal } from "@/components/modal";
import { ComponentList } from "./component-list";

export function ComponentBrowser() {
  const tab = bucket("Tools");
  
  return (
    <div class="bg-gray-100 w-full h-full rounded-md drop-shadow
      flex flex-col p-2 gap-2 overflow-y-auto">
      
      <div class="flex gap-2 w-full">
        <Tabs items={["Tools", "Blocks", "Interactable", "Parts", "Consumable"]}
          onSelect={tab} />
        <div class="flex gap-2 shrink">
          <button class="btn btn-sm flex gap-2 text-gray-100 bg-orange-400 rounded-md drop-shadow
            active:bg-orange-300 transition-all duration-75"
            onClick={() => openModal("pick-components-modal")}>
            <FaSolidCartPlus />
            Pick
          </button>
        </div>
      </div>
      
      <ComponentList />

      <PickComponentsModal />
    </div>
  )
}
