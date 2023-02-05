import { Component, OnInit } from '@angular/core';
import * as aos from 'aos';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss']
})
export class LandingLayoutComponent implements OnInit {
  ngOnInit(): void {
    aos.init()
  }
}
