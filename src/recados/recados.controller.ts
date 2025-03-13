import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    @Get()
    findAll(){
        return 'Retorna todos os recados'
    }

    @Get(':id')    
    findOne(@Param('id') id: string) {        
        return `Retorna somente um recado ${id}`
    }

    @Post()
    async create(@Body() body: any) {
        return `Cria um novo recado : ${body.message}`
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        return `Atualiza o recado: ${id} com a nova mensagem: '${body.message}'`
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return `Deleta o recado: ${id}`
    }
}
