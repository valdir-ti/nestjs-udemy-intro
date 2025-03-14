import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

type TRecado = {
  message: string;
};

export type TRecadoPagination = {
  limit: number;
  page: number;
};

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: TRecadoPagination) {
    const { limit = 10, page = 1 } = pagination;
    return this.recadosService.getAll({ limit, page });
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Retorna somente um recado ${id}`;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: TRecado) {
    return `Cria um novo recado : ${body?.message}`;
  }

  @HttpCode(HttpStatus.CREATED)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: TRecado) {
    return `Atualiza o recado: ${id} com a nova mensagem: '${body?.message}'`;
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Deleta o recado: ${id}`;
  }
}
