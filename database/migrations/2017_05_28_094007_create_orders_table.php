<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function(Blueprint $table){
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 112)->nullable();
            $table->string('ref', 12)->nullable();
            $table->timestamp('daydate')->nullable();
            $table->timestamp('duedate')->nullable();
            $table->integer('totalpriceht')->unsigned()->nullable();
            $table->decimal('vat', 5, 2)->default(0.00);
            $table->integer('totalpricettc')->unsigned()->nullable();
            $table->integer('customer_id')->unsigned();
            $table->foreign('customer_id')->references('id')->on('customers');
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
        Schema::drop('orders');
    }
}
