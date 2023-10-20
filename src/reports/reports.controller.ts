import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportDto) {
    return this.reportsService.create(body);
  }

  @Get()
  getReport() {
    return this.reportsService.find();
  }

  @Get('/:id')
  singleReport(@Param('id') id: string) {
    return this.reportsService.findOne(parseInt(id));
  }
}
