import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { FloatingRoundedButtonComponent } from "./floating-rounded-button.component";

describe("FloatingRoundedButtonComponent", () => {
  let component: FloatingRoundedButtonComponent;
  let fixture: ComponentFixture<FloatingRoundedButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingRoundedButtonComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingRoundedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
