import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService, IComponent } from '../../services/layout.service';

@Component({
  selector: 'app-r-sidebar',
  templateUrl: './r-sidebar.component.html',
  styleUrls: ['./r-sidebar.component.scss']
})
export class RSidebarComponent implements OnInit {


//
get options(): GridsterConfig {
  return this.layoutService.options;
}

get layout(): GridsterItem[] {
  return this.layoutService.layout;
}

get components(): IComponent[] {
  return this.layoutService.components;
}

constructor(
  private layoutService: LayoutService
) { }

//


  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;
  
  

  ngOnInit() {
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

