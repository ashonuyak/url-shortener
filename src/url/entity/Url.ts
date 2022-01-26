import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  long: string

  @Column()
  short: string
}
