import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductCategory {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;
}
