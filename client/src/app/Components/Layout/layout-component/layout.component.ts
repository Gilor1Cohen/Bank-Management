import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-layout-component',
  imports: [AsideComponent, MainComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
