import { Module } from '@nestjs/common';
import { BoardResolve } from './boards.resolver';
import { BoardService } from './boards.service';
@Module({
  //imports: [],
  //controllers: [],
  providers: [BoardResolve, BoardService],
})
export class BoardModule {}
