<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifySirenNicAndAddSiretColumnToCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('companies', function (Blueprint $table) {
            // Modifier les colonne siren et nic en varchar
            // Ajouter la colonne siret
            $table->string('siren', 9)->nullable()->change();
            $table->string('nic', 5)->nullable()->change();
            $table->string('siret', 14)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->integer('siren')->unsigned();
            $table->integer('nic')->unsigned();
            $table->dropColumn('siret');
        });
    }
}
