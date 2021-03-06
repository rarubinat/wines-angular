import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { WineItemComponent } from "./wine-item.component";

describe("WineItemComponent", () => {
  let component: WineItemComponent;
  let fixture: ComponentFixture<WineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WineItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
