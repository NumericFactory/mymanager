@extends('layouts.loginlayout')

@section('content')
 <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                  {{ csrf_field() }}
                  <div class="login-form">

                    <div class="form-group">
                      <div class="input-group"><span class="input-group-addon"><i class="icon s7-user"></i></span>
                        <input id="email" type="email" placeholder="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>
                      </div>
                       
                    </div>

                    <div class="form-group">
                      <div class="input-group"><span class="input-group-addon"><i class="icon s7-lock"></i></span>
                        <input id="password" placeholder="Mot de passe" type="password" class="form-control" name="password" required>
                      </div>
                        @if ($errors->has('email'))
                          <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                          </span>
                        @endif
                        @if ($errors->has('password'))
                          <span class="help-block">
                              <strong>{{ $errors->first('password') }}</strong>
                          </span>
                        @endif
                    </div>

                    <div class="form-group login-submit">
                      <button data-dismiss="modal" type="submit" class="btn btn-primary btn-lg">Connexion</button>
                    </div>
                    <div class="form-group footer row">
                      <div class="col-xs-6"><a href="{{ url('/password/reset') }}">Mot de passe oublié ?</a></div>
                      <div class="col-xs-6 remember">
                        <label for="remember">Se souvenir de moi</label>
                        <div class="am-checkbox">
                          <input type="checkbox" id="remember" name="remember" {{ old('remember') ? 'checked' : ''}}>
                          <label for="remember"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
@endsection
