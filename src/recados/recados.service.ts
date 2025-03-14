import { Injectable } from '@nestjs/common';
import { TRecadoPagination } from './recados.controller';

@Injectable()
export class RecadosService {
  getAll({ limit, page }: TRecadoPagination) {
    return `Retorna todos os recados do service. Limit=${limit}, page=${page}`;
  }
}
