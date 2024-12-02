import { ModalController } from "@/components/modal";
import { onMount } from "solid-js";
import { names } from "solid-new-bucket"
import { WorkshopContentList } from "./workshop-content-list";
import { ComponentBrowser } from "./component-browser";
import { DetailsBox } from "./details-box";
import { WorkshopContentComponents } from "./workshop-content-components";

export function PickComponentsModal() {
  let dialog: HTMLDialogElement;

  const controller = new ModalController((data) => {
  });
  onMount(() => {
    controller.mount(dialog);
  });
  
  return (
    <dialog id="pick-components-modal" class={names("modal")} ref={el => dialog = el}>
      <div class="flex gap-2 w-full h-full">
        <WorkshopContentList />
        <WorkshopContentComponents />
        <DetailsBox />
      </div>
    </dialog>
  )
}

