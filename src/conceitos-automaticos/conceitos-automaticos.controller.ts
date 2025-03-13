import { Controller, Get } from '@nestjs/common';
import { ConceitosAutomaticosService } from './conceitos-automaticos.service';

@Controller('conceitos-automaticos')
export class ConceitosAutomaticosController {
    constructor(private readonly conceitosAutomaticosService: ConceitosAutomaticosService) {}
    
    @Get()
    home(): string {
        return this.conceitosAutomaticosService.home()
    }

}
