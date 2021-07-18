export class TabSwitcher {
  private hidePreviousTab: () => void = () => {};

  public show(showTab: () => void, hideTab: () => void): void {
    this.hidePreviousTab();
    showTab();
    this.hidePreviousTab = hideTab;
  }
}
