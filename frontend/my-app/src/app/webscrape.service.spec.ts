import { TestBed } from '@angular/core/testing';

import { WebscrapeService } from './webscrape.service';

describe('WebscrapeService', () => {
  let service: WebscrapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebscrapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
