import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

export interface AppOverlayConfig extends OverlayConfig {}

@Injectable({
  providedIn: 'root',
})
export class UiLoadingService extends OverlayConfig {
  // @ts-ignore
  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {
    super();
  }

  openSpinner(config: AppOverlayConfig, component: any) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    config['positionStrategy'] = positionStrategy;
    // Returns an OverlayRef which is a PortalHost
    this.overlayRef = this.overlay.create(config);

    // Create ComponentPortal that can be attached to a PortalHost
    const componentPortal = new ComponentPortal(component);

    // Attach ComponentPortal to PortalHost
    this.overlayRef.attach(componentPortal);
  }

  stopSpinner() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
