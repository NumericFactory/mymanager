<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTableCustomerUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 98)->nullable();
            $table->string('optionnalname', 98)->nullable();
            $table->integer('type_id')->unsigned()->default(0);
            $table->string('siren', 9)->nullable();
            $table->string('nic', 5)->nullable();
            $table->string('siret', 14)->nullable();
            $table->timestamps();
        });

        Schema::create('customer_user', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('customer_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            
            $table->foreign('customer_id')
                  ->references('id')
                  ->on('customers')
                  ->onDelete('cascade');

            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
        Schema::dropIfExists('customer_user');
    }
}
