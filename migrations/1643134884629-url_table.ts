import {MigrationInterface, QueryRunner} from "typeorm";

export class urlTable1643134884629 implements MigrationInterface {
    name = 'urlTable1643134884629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url" ("id" SERIAL NOT NULL, "long" character varying NOT NULL, "short" character varying NOT NULL, CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "url"`);
    }

}
