import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602769376053 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //REALIZAR ALTERAÇÕES
        //CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO

        // CONSTRUÇÃO DA TABELA
        await queryRunner.createTable(new Table({
            // nome da tabela
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, // Sempre positivo
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment' 
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10, // numeros apos a virtula
                    precision: 2 // numeros antes a virgula
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10, // numeros apos a virtula
                    precision: 2 // numeros antes a virgula
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DESFAZER O QUE FOI FEITO NO UP

        await queryRunner.dropTable('orphanages')
    }

}
