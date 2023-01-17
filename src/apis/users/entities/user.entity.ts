import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
