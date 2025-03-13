import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticosService {
  home(): string {
    return 'conceitos automaticos service';
  }
}
