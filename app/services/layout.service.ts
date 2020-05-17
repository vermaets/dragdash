import { Injectable } from '@angular/core';
import {CompactType,DirTypes, DisplayGrid,  GridType, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

export interface IComponent {
  id: string;
  componentRef: string;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public options: GridsterConfig = {
      gridType: GridType.Fit,
    compactType: CompactType.None,
    margin: 5,
    outerMargin: true, 
    outerMarginTop: 5,
    outerMarginRight: 5,
    outerMarginBottom: 5,
    outerMarginLeft: 5,
    useTransformPositioning: true,
   mobileBreakpoint: 640,
    minCols: 1,
    maxCols: 100,
    minRows: 1,
    maxRows: 100,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,  
    minItemRows: 1,
    maxItemArea: 2500,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1,
    fixedColWidth: 50,
    fixedRowHeight: 50,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    enableOccupiedCellDrop: false,
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    ignoreMarginInRow: false,
    draggable: {
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
    swap: false,
    pushItems: true,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: {north: true, east: true, south: true, west: true},
    pushResizeItems: false,
    displayGrid: DisplayGrid.OnDragAndResize,
    disableWindowResize: false,
    disableWarnings: false,
    scrollToNewItems: false

  };

//};
  // this.options = {
  //   gridType: GridType.Fit,
  //   compactType: CompactType.None,
  //   margin: 10,
  //   outerMargin: true,
  //   outerMarginTop: null,
  //   outerMarginRight: null,
  //   outerMarginBottom: null,
  //   outerMarginLeft: null,
  //   useTransformPositioning: true,
  //   mobileBreakpoint: 640,
  //   minCols: 1,
  //   maxCols: 100,
  //   minRows: 1,
  //   maxRows: 100,
  //   maxItemCols: 100,
  //   minItemCols: 1,
  //   maxItemRows: 100,
  //   minItemRows: 1,
  //   maxItemArea: 2500,
  //   minItemArea: 1,
  //   defaultItemCols: 1,
  //   defaultItemRows: 1,
  //   fixedColWidth: 105,
  //   fixedRowHeight: 105,
  //   keepFixedHeightInMobile: false,
  //   keepFixedWidthInMobile: false,
  //   scrollSensitivity: 10,
  //   scrollSpeed: 20,
  //   enableEmptyCellClick: false,
  //   enableEmptyCellContextMenu: false,
  //   enableEmptyCellDrop: false,
  //   enableEmptyCellDrag: false,
  //   enableOccupiedCellDrop: false,
  //   emptyCellDragMaxCols: 50,
  //   emptyCellDragMaxRows: 50,
  //   ignoreMarginInRow: false,
  //   draggable: {
  //     enabled: true,
  //   },
  //   resizable: {
  //     enabled: true,
  //   },
  //   swap: false,
  //   pushItems: true,
  //   disablePushOnDrag: false,
  //   disablePushOnResize: false,
  //   pushDirections: {north: true, east: true, south: true, west: true},
  //   pushResizeItems: false,
  //   displayGrid: DisplayGrid.Always,
  //   disableWindowResize: false,
  //   disableWarnings: false,
  //   scrollToNewItems: false
  // };

  public layout: GridsterItem[] = [];
  public components: IComponent[] = [];

  dropId: string;

  constructor() { }

  addItem(): void {
    this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0
    });
  }

  //added
  resetGrid(): void {

      this.layout.length=0;
      this.components.length=0;
  }


  //added
  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find(c => c.id === item);
    this.components.splice(this.components.indexOf(comp), 1);
  }
  //
  // deleteOneItem(): void {

  //       this.layout.splice(this.layout.length, 1);
  //       this.components.splice(1,this.components.length);
  // }

  deleteItem(id: string): void {

    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
  }

  setDropId(dropId: string): void {
    this.dropId = dropId;
  }

  dropItem(dragId: string): void {
    const { components } = this;
    const comp: IComponent = components.find(c => c.id === this.dropId);
    const updateIdx: number = comp ? components.indexOf(comp) : components.length;
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId
    };
    this.components = Object.assign([], this.components, { [updateIdx]: componentItem });
  }

  getComponentRef(id: string): string {
    const comp = this.components.find(c => c.id === id);
    return comp ? comp.componentRef : null;
  }

}
