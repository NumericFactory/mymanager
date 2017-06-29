<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->increments('id');
            $table->string('name', 42)->nullable();
            $table->string('email', 155)->unique();
            $table->string('password');
            $table->rememberToken();
            $table->string('civility', 13)->nullable();
            $table->string('firstname', 42)->nullable();
            $table->string('lastname', 42)->nullable();
            $table->string('tel', 10)->nullable();
            $table->integer('mobile')->nullable();
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
             Schema::dropIfExists('users');
    }
}
