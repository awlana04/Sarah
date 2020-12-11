import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsersTable1607645042795 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users_table',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isGenerated: true,
          isPrimary: true,
          isUnique: true,
          generationStrategy: 'increment',
        },
        {
          name: 'register_name',
          type: 'varchar',
        },
        {
          name: 'registration',
          type: 'number',
        },
        {
          name: 'institution_where_it_operates',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_table');
  }

}
