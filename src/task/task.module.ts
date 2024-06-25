import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Cargar variables de entorno globalmente
    PrismaModule,
  ],
})
export class TaskModule {}
