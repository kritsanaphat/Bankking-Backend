import { 
    Column, Entity, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn 
} from "typeorm";

@Entity()
export class ActivityTransaction {
    @PrimaryGeneratedColumn(
        'uuid'
    )
    transactionID : string;

    @Column(
        'uuid'
    )
    accountID : string;

    @Column(
        'varchar'
    )
    IPAddress : string

    @CreateDateColumn()
    created_at: Date
  
    @UpdateDateColumn()
    updated_at  :Date;
  
    @DeleteDateColumn()
    deleted_at  :Date
}
