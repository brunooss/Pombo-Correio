import { TestBed } from '@angular/core/testing';

import { CommunicationServerService } from './communication-server.service';

describe('CommunicationServerService', () => {
  let service: CommunicationServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
