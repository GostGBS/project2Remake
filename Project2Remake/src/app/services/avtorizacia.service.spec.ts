import { TestBed } from "@angular/core/testing";

import { AvtorizaciaService } from "./avtorizacia.service";

describe("AvtorizaciaService", () => {
  let service: AvtorizaciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvtorizaciaService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
