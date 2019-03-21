

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
      <h1>Real state Lease</h1>
      <h2>List of Leases</h2>
      <p>Last 10 leases</p>
      <p>Available leases </p>
      <p>Lease ID</p>
      <p>Lease Name</p>
    
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
