import { Controller, Get, Param } from '@nestjs/common';

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
}
