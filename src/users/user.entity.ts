import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25, nullable: true })
  fullName: string;

  @Column('date', { nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
