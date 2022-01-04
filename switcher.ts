export class TabsSwitcher {
  private hidePreviousTab: () => void = () => {};

  public static create(): TabsSwitcher {
    return new TabsSwitcher();
  }

  public async show(
    showTab: () => Promise<void> | void,
    hideTab: () => void
  ): Promise<void> {
    this.hidePreviousTab();
    this.hidePreviousTab = hideTab;
    await showTab();
  }
}
