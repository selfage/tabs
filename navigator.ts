export class TabNavigator<Tab> {
  public goTo: (tab: Tab) => void;
  private currentTab: Tab;

  public constructor(
    private addTab: (tab: Tab) => void,
    private removeTab: (tab: Tab) => void,
    private updateTab: (tab: Tab) => void = () => {}
  ) {
    this.goTo = this.goToInternal;
  }

  private goToInternal = (tab: Tab): void => {
    if (this.currentTab !== tab) {
      this.removeTab(this.currentTab);
      this.currentTab = tab;
      this.addTab(this.currentTab);
    } else {
      this.updateTab(this.currentTab);
    }
  };

  // Once removed, all future gotos are stopped.
  public remove(): void {
    this.removeTab(this.currentTab);
    this.goTo = () => {};
  }
}
