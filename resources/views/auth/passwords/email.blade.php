@extends('layouts.loginlayout')

<!-- Main Content -->
@section('content')

   
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/password/email') }}">
                        {{ csrf_field() }}
                     <div class="login-form">

                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                      <div class="input-group"><span class="input-group-addon"><i class="icon s7-user"></i></span>
                        <input id="email" type="email" placeholder="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>
                      </div>
                      @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                      @endif
                    </div>

                    <div class="form-group login-submit">
                      <button data-dismiss="modal" type="submit" class="btn btn-primary btn-lg">Envoyer le lien</button>
                    </div>

                    </div>
                    </form>
                
@endsection
