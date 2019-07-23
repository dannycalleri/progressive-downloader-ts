// https://stackoverflow.com/questions/51343322/extending-eventtarget-in-typescript-angular-2
export class DelegatedEventTarget implements EventTarget {
  private delegate = document.createDocumentFragment();

  addEventListener(...args: any): void {
    this.delegate.addEventListener.apply(this.delegate, args);
  }

  dispatchEvent(...args: any): boolean {
    return this.delegate.dispatchEvent.apply(this.delegate, args);
  }

  removeEventListener(...args: any): void {
    return this.delegate.removeEventListener.apply(this.delegate, args);
  }
}
