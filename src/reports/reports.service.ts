import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}

  create(reportDto: CreateReportDto) {
    const report = this.repo.create(reportDto);
    return this.repo.save(report);
  }

  find() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  // async update(id: number, dto: CreateReportDto) {
  //   const report = await this.repo.findOne({ where: { id } });
  //   const updateData = [report, ...dto];
  //   Object.assign(report,dto)
  // }
}
