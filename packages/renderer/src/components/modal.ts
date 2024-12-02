import { Consumer } from "solid-new-bucket";

export function openModal(id: string, onSubmit?: Consumer<any>, data?: any) {
  const elem = document.getElementById(id) as HTMLDialogElement;
  elem.onsubmit = (e) => onSubmit?.(e);
      console.log(elem)
  elem.dispatchEvent(new CustomEvent('show', {
    detail: data
  }));
}

export class ModalController {

  constructor(private onShow?: Consumer<any>) {
  }

  mount(dialog: HTMLDialogElement) {
    dialog.addEventListener('submit', (e) => {
      dialog.classList.remove('modal-open');
      e.preventDefault();
      setTimeout(() => {
        dialog.close();
      }, 100);
    });

    dialog.addEventListener('cancel', (e) => {
      dialog.classList.remove('modal-open');
      e.preventDefault();
      setTimeout(() => {
        dialog.close();
      }, 100);
    });

    dialog.addEventListener('show', (e) => {
      const data = (e as CustomEvent).detail;
      this.onShow?.(data);
      
      dialog.showModal();
      dialog.classList.add('modal-open');
    });
  }
}