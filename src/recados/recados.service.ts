import { Injectable } from '@nestjs/common';
import { TRecado, TRecadoPagination } from './recados.controller';
import { RecadoEntity } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: RecadoEntity[] = [
    {
      id: 1,
      texto: 'Recado de teste',
      de: 'Maria',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  findAll({ limit, page }: TRecadoPagination) {
    return this.recados;
  }

  findOne(id: string) {
    return this.recados.find(recado => recado.id === +id);
  }

  create(body: any) {
    this.lastId++;
    const recadoId = this.lastId;
    const newRecado = {
      id: recadoId,
      ...body,
    };
    this.recados.push(newRecado);

    return newRecado;
  }

  update(id: string, body: TRecado) {
    const recadoExistenteIndex = this.recados.findIndex(
      recado => recado.id === +id,
    );
    if (recadoExistenteIndex >= 0) {
      const recadoExistente = this.recados[recadoExistenteIndex];

      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...body,
      };
    }

    return this.recados[recadoExistenteIndex];
  }

  remove(id: string) {
    const recadoExistente = this.recados.findIndex(recado => recado.id === +id);
    if (recadoExistente >= 0) this.recados.splice(recadoExistente, 1);
  }
}
