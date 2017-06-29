<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('formatted_address');
            $table->string('address');
            $table->string('complementaddress')->nullable();
            $table->integer('cp')->unsigned()->nullable();
            $table->string('city');
            $table->string('country')->nullable();
            $table->integer('addresstype')->unsigned()->nullable();

            $table->integer('company_id')->unsigned()->nullable();

            $table->nullableMorphs('addressable');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
