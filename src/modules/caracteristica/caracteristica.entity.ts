import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { InmuebleCaracteristica } from '../inmueble-caracteristica/inmueble-caracteristica.entity';

@Entity('caracteristica')
export class Caracteristica extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  nombre: string;

  //relaciones
  @OneToMany(
    () => InmuebleCaracteristica,
    inmuebleCaracteristica => inmuebleCaracteristica.caracteristica,
    { nullable: true, eager: false },
  )
  inmuebleCaracteristica: InmuebleCaracteristica;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;
}
