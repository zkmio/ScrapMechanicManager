import { ComponentBrowser } from "./component-browser";
import { DetailsBox } from "./details-box";
import { WorkshopContentList } from "./workshop-content-list";

export default function CreatePackage() {
  return (
    <div class="flex gap-2 w-full h-full">
      <WorkshopContentList />
      <ComponentBrowser />
      <DetailsBox />
    </div>
  )
}
