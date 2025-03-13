import { Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    @Get()
    findAll(@Query() pagination: any){
        const { limit = 10, page = 1} = pagination
        console.log({limit, page})
        return `Retorna todos os recados. Limit=${limit}, page=${page}`
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
