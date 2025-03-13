import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

type TRecado = {
  message: string;
};

type TRecadoPagination = {
  limit: number;
  page: number;
};

@Controller('recados')
export class RecadosController {
  @Get()
  findAll(@Query() pagination: TRecadoPagination) {
    const { limit = 10, page = 1 } = pagination;
    console.log({ limit, page });
    return `Retorna todos os recados. Limit=${limit}, page=${page}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Retorna somente um recado ${id}`;
  }

  @Post()
  create(@Body() body: TRecado) {
    return `Cria um novo recado : ${body?.message}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: TRecado) {
    return `Atualiza o recado: ${id} com a nova mensagem: '${body?.message}'`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Deleta o recado: ${id}`;
  }
}
