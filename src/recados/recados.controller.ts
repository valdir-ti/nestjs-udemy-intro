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

export type TRecado = {
  id: number;
  texto: string;
  de: string;
  para: string;
  lido: boolean;
  data: Date;
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
    return this.recadosService.findAll({ limit, page });
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: any) {
    return this.recadosService.create(body);
  }

  @HttpCode(HttpStatus.CREATED)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: TRecado) {
    return this.recadosService.update(id, body);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}
