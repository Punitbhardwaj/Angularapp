

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="Dcard">
    
        <h1>Dashboard</h1>
      
        </div>

      <div class="card">
      <div>Real state Lease</div>
      <h1>List of Leases</h1>
      <p>Last 10 leases</p>
      <p>Available leases </p>
    
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
