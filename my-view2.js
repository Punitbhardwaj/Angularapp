

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h2>Approval</h2>
        <p>Linked To</p>   
        <label>Linked Record </label> <br/>
        <label>Linked Business Object </label> <br/>
        <label>Linked Form </label> <br/>
        <h2>Approval Details</h2>
        <label>submitted by :</label>
        <label> Currently Assigned To </label>
        <h2>Approver Status</h2>

      
           </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
