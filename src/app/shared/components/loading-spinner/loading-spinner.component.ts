import {Component} from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  template: `
    <div class="spinner-container bg-dark">
      Searching
      <svg height="30" stroke="#fff" viewBox="0 0 45 45" width="30" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)">
          <circle cx="22" cy="22" r="6" stroke-opacity="0">
            <animate attributeName="r"
                     begin="1.5s" calcMode="linear"
                     dur="3s"
                     repeatCount="indefinite"
                     values="6;22"/>
            <animate attributeName="stroke-opacity"
                     begin="1.5s" calcMode="linear"
                     dur="3s" repeatCount="indefinite"
                     values="1;0"/>
            <animate attributeName="stroke-width"
                     begin="1.5s" calcMode="linear"
                     dur="3s" repeatCount="indefinite"
                     values="2;0"/>
          </circle>
          <circle cx="22" cy="22" r="6" stroke-opacity="0">
            <animate attributeName="r"
                     begin="3s" calcMode="linear"
                     dur="3s"
                     repeatCount="indefinite"
                     values="6;22"/>
            <animate attributeName="stroke-opacity"
                     begin="3s" calcMode="linear"
                     dur="3s" repeatCount="indefinite"
                     values="1;0"/>
            <animate attributeName="stroke-width"
                     begin="3s" calcMode="linear"
                     dur="3s" repeatCount="indefinite"
                     values="2;0"/>
          </circle>
          <circle cx="22" cy="22" r="8">
            <animate attributeName="r"
                     begin="0s" calcMode="linear"
                     dur="1.5s"
                     repeatCount="indefinite"
                     values="6;1;2;3;4;5;6"/>
          </circle>
        </g>
      </svg>
    </div>
  `,
  styles: [`
    .spinner-container {
      position: fixed;
      bottom: 15px;
      right: 15px;
      background-color: black;
      color: #fff;
      padding: 5px 10px;
      border-radius: 20px;
      align-items: center;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    }

    span {
      margin-left: 5px;
    }
  `]
})
export class LoadingSpinnerComponent {

}
