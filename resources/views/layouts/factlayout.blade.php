<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    {{-- Pour supporter le FormData JS, et notamment la méthode formData.get('inputname') --}}
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>EZFactures</title>
    <!-- Latest compiled and minified CSS -->

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link href="{{ elixir('assets/lib/jquery.nanoscroller/css/nanoscroller.css') }}" rel="stylesheet">
    <link href="{{ elixir('assets/lib/bootstrap-select/css/bootstrap-select.css') }}" rel="stylesheet">
    <link href="{{ elixir('assets/lib/bootstrap-slider/css/bootstrap-slider.css') }}" rel="stylesheet">
    <link href="{{ elixir('css/all.css', '') }}" rel="stylesheet">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body class="style-grey-red">
    <div class="am-wrapper am-fixed-sidebar">
      <nav class="navbar navbar-default navbar-fixed-top am-top-header">
        <div class="container-fluid">
          <div class="navbar-header">
            <div class="page-title"><span>{{ $title }}</span></div>
            <a href="#" class="am-toggle-left-sidebar navbar-toggle collapsed">
              <span class="icon-bar">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <a style="padding:0" href="index.html" class="navbar-brand">
            {{-- <img class="img img-responsive" src="https://www.minutebuzz.com/public/img/txt-hero.png"> --}}
            {{-- <img style="width:80%; margin:auto; opacity:0.45;" class="img img-responsive" src="http://acem.edu.np/techbihani/img/hero.png">   --}}
            {{-- <img style="width:80%; margin:auto; opacity:0.55;" class="img img-responsive" src="  https://pbs.twimg.com/profile_images/760697118294237186/KVBMD0Zc.jpg">   --}}
          
            </a>
          </div>
          <a href="#" class="am-toggle-right-sidebar">
            <span style="color: #024156; border: 2px solid #cc5151; font-weight: bold; padding: 5px; background: #f2baba; border-radius: 55px" class="icon s7-gift"></span>
          </a>
          <a href="#" data-toggle="collapse" data-target="#am-navbar-collapse" class="am-toggle-top-header-menu collapsed">
          <span class="icon s7-angle-down"></span>
          </a>
          <div id="am-navbar-collapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right am-user-nav">
              <li class="dropdown"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle">
              <img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">
              <span class="user-name">Frederic Lossignol</span><span class="angle-down s7-angle-down"></span></a>
                <ul role="menu" class="dropdown-menu">
                  <li><a href="#"> <span class="icon s7-user"></span>Mon compte</a></li>
                  <li><a href="#"> <span class="icon s7-config"></span>Paramètres</a></li>
                  <li>
                    <a class='pagelink' href="{{route('logout')}}" 
                    onclick="event.preventDefault();document.getElementById('logout-form').submit();"> 
                      <span class="icon s7-power"></span>
                        Déconnexion
                    </a>
                    <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                    </form>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="nav navbar-nav am-nav-right">
              {{-- <li><a href="#">Home</a></li> --}}
              <li><a href="#">A propos</a></li>
              <li class="dropdown"><a href="{{ route('pricing') }}" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle">Offres <span class="angle-down s7-angle-down"></span></a>
                <ul role="menu" class="dropdown-menu">
                  <li><a href="#"><strong>ESSENTIEL</strong></a></li>
                  <li><a href="#"><strong>PRO</strong></a></li>
                  
                </ul>
              </li>
              <li><a href="#">Aide et Support</a></li>
            </ul>

    
          </div>
        </div>
      </nav>
      <div class="am-left-sidebar">
        <div class="content">
          <div class="am-logo"></div>
          <ul class="sidebar-elements">
            <li class="parent"><a class='pagelink' href="#"><i class="icon s7-monitor"></i><span>Accueil</span></a>
               <!-- <ul class="sub-menu">
                <li><a href="index.html">Version 1</a>
                </li>
                <li><a href="dashboard2.html">Version 2</a>
                </li>
                <li><a href="dashboard3.html"><span class="label label-primary pull-right">New</span>Version 3</a>
                </li>
                <li><a href="dashboard4.html"><span class="label label-primary pull-right">New</span>Version 4</a>
                </li>
              </ul>  -->
            </li>

            <li class="parent {{ Request::is('invoices*') ? 'active' : '' }}">
              <a class='pagelink' href="{{route('invoices.index')}}"><i class="icon s7-ribbon"></i><span>Factures</span></a>
             {{--  <ul class="sub-menu">
                <li class=""><a href="{{route('invoices.index')}}">Toutes les factures</a></li>
                <li class="active"><a href="{{route('invoices.create')}}"><span class="label label-primary pull-right">Créer</span>Nouvelle facture</a></li>
              </ul> --}}
            </li>
            
            <li class="parent {{ Request::is('orders*') ? 'active' : '' }}">
            <a class='pagelink' href="{{route('orders.index')}}"><i class="icon s7-note2"></i><span>Devis</span></a>
             {{--  <ul class="sub-menu">
                <li><a href="{{route('orders.index')}}">Tous les devis</a></li>
                <li><a href="{{route('orders.create')}}"><span class="label label-primary pull-right">Créer</span>Nouveau devis</a></li>
              </ul> --}}
            </li>

            <li class="parent {{ Request::is('customers*') ? 'active' : '' }}">
            <a class='pagelink' href="{{route('customers.index')}}"><i class="icon s7-users"></i><span>Mes Clients</span></a>
              {{-- <ul class="sub-menu">
                <li><a href="{{route('customers.index')}}">Tous les Clients</a></li>
                <li><a href="{{route('customers.create')}}"><span class="label label-primary pull-right">Ajouter</span>Nouveau Client</a></li>
              </ul> --}}
            </li>


           {{--  <li class="parent"><a href="#"><i class="icon s7-mail"></i><span>Messages</span></a>
              <ul class="sub-menu">
                <li><a href="email-inbox.html">Inbox</a>
                </li>
                <li><a href="email-read.html">Email Detail</a>
                </li>
                <li><a href="email-compose.html">Email Compose</a>
                </li>
              </ul>
            </li> --}}
            <li class="parent {{ Request::is('users*') ? 'active' : '' }}">
            <a class='pagelink' data-turbolinks="false" href="{{route('users.edit', Auth::id() )}}"><i class="icon s7-settings"></i><span>Mon Entreprise</span></a>
              {{-- <ul class="sub-menu">
                <li><a href="layouts-nosidebar-right.html">Identité</a></li>
                <li><a href="layouts-nosidebar-right.html">Mes conditions générales <span><small>(optionnel)</small></span></a></li>
              </ul> --}}
            </li>
           {{--  <li class="parent"><a href="#"><i class="icon s7-map-marker"></i><span>Maps</span></a>
              <ul class="sub-menu">
                <li><a href="maps-google.html">Google Maps</a>
                </li>
                <li><a href="maps-vector.html">Vector Maps</a>
                </li>
              </ul>
            </li> --}}
          </ul>
          <!--Sidebar bottom content-->
        </div>
      </div>
      <div class="am-content">
        <div class="page-head">
        <div class="row">
        <div class="col-lg-10">
        @if(isset($btntitle)) 
          <a  style="float: right;
                    margin-top: 6px;
                    background: #fff;
                    border-width: 1px;
                    color: #678;
                    padding: 14px 17px;" 
              href="{{route($ctrllink.'.'.$actionlink)}}" class="btn btn-space btn-primary md-trigger pagelink">
                <i class="fa fa-plus"></i>
                {{$btntitle}}
          </a>
        @endif
          <h2 style="opacity:0">{{$title}}</h2>

          <ol class="breadcrumb hidden">
            <li><a href="#">Home</a></li>
            <li class="active">{{ $title }}</li>
          </ol>

        </div>
        </div>
        </div>
  
        <!-- <aside class="page-aside">
          <div class="am-scroller nano has-scrollbar">
            <div class="nano-content" tabindex="0" style="right: -17px;">
              <div class="content">
                <h2>Aside Element</h2>
                <p>This is the <b>aside</b> content, you can easily add content and components to this element.</p>
              </div>
            </div>
          <div class="nano-pane" style="display: none;"><div class="nano-slider" style="height: 559px; transform: translate(0px, 0px);"></div></div></div>
        </aside> -->

        <div class="main-content">

        <div class="super-loading hidden">
          <div id="loading">
            <ul class="bokeh">
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
        </div>

        @yield('content')
        </div>
        </div>
      </div>
      <nav class="am-right-sidebar">
        <div class="sb-content">
          <div class="user-info">
          {{-- <img src="assets/img/avatar.jpg"> --}}
          <img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">

          <span class="name">Samantha Amaretti<span class="status"></span></span><span class="position">Art Director</span></div>
          <div class="tab-navigation">
            <ul role="tablist" class="nav nav-tabs nav-justified">
              <li role="presentation" class="active"><a href="#tab1" aria-controls="home" role="tab" data-toggle="tab"> <span class="icon s7-smile"></span></a></li>
              <li role="presentation"><a href="#tab2" aria-controls="profile" role="tab" data-toggle="tab"> <span class="icon s7-chat"></span></a></li>
              <li role="presentation"><a href="#tab3" aria-controls="messages" role="tab" data-toggle="tab"> <span class="icon s7-help2"></span></a></li>
              <li role="presentation"><a href="#tab4" aria-controls="settings" role="tab" data-toggle="tab"> <span class="icon s7-ticket"></span></a></li>
            </ul>
          </div>
          <div class="tab-panel">
            <div class="tab-content">
              <div id="tab1" role="tabpanel" class="tab-pane announcement active am-scroller nano">
                <div class="nano-content">
                  <div class="content">
                    <h2>Announcement</h2>
                    <ul>
                      <li>
                        <div class="icon"><span class="icon s7-sun"></span></div>
                        <div class="content"><a href="#">Happy Day</a><span>Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.</span></div>
                      </li>
                      <li>
                        <div class="icon"><span class="icon s7-gift"></span></div>
                        <div class="content"><a href="#">Congratulations Developers</a><span>Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.</span></div>
                      </li>
                      <li>
                        <div class="icon"><span class="icon s7-star"></span></div>
                        <div class="content"><a href="#">High Score</a><span>Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.</span></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="search">
                  <input type="text" placeholder="Search..." name="q"><span class="s7-search"></span>
                </div>
              </div>
              <div id="tab2" role="tabpanel" class="tab-pane chat">
                <div class="chat-contacts">
                  <div class="chat-sections">
                    <div class="am-scroller nano">
                      <div class="content nano-content">
                        <h2>Recent</h2>
                        <div class="recent">
                          <div class="user"><a href="#"><img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">
                              <div class="user-data"><span class="status away"></span><span class="name">Claire Sassu</span><span class="message">Can you share the...</span></div></a></div>
                          <div class="user"><a href="#"><img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">
                              <div class="user-data"><span class="status"></span><span class="name">Maggie jackson</span><span class="message">I confirmed the info.</span></div></a></div>
                          <div class="user"><a href="#"><img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">
                              <div class="user-data"><span class="status offline"></span><span class="name">Joel King   </span><span class="message">Ready for the meeti...</span></div></a></div>
                        </div>
                        <h2>Contacts</h2>
                        <div class="contact">
                          <div class="user"><a href="#"><img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">
                              <div class="user-data2"><span class="status"></span><span class="name">Mike Bolthort</span></div></a></div>
                          <div class="user"><a href="#"><img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">
                              <div class="user-data2"><span class="status"></span><span class="name">Maggie jackson</span></div></a></div>
                          <div class="user"><a href="#"><img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">
                              <div class="user-data2"><span class="status offline"></span><span class="name">Jhon Voltemar</span></div></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="search">
                    <input type="text" placeholder="Search..." name="q"><span class="s7-search"></span>
                  </div>
                </div>
                <div class="chat-window">
                  <div class="title">
                    <div class="user"><img src="//graph.facebook.com/10207061584792575/picture?type=normal&height=100&width=100">
                      <h2>Maggie jackson</h2><span>Active 1h ago</span>
                    </div><span class="icon return s7-angle-left"></span>
                  </div>
                  <div class="chat-messages">
                    <div class="am-scroller nano">
                      <div class="content nano-content">
                        <ul>
                          <li class="friend">
                            <div class="msg">Hello</div>
                          </li>
                          <li class="self">
                            <div class="msg">Hi, how are you?</div>
                          </li>
                          <li class="friend">
                            <div class="msg">Good, I'll need support with my pc</div>
                          </li>
                          <li class="self">
                            <div class="msg">Sure, just tell me what is going on with your computer?</div>
                          </li>
                          <li class="friend">
                            <div class="msg">I don't know it just turns off suddenly</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="chat-input">
                    <div class="input-wrapper"><span class="photo s7-camera"></span>
                      <input type="text" placeholder="Message..." name="q" autocomplete="off"><span class="send-msg s7-paper-plane"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab3" role="tabpanel" class="tab-pane faqs am-scroller nano">
                <div class="nano-content">
                  <div class="content">
                    <h2>FAQs</h2>
                    <div id="accordion" role="tablist" aria-multiselectable="true" class="panel-group accordion">
                      <div class="panel">
                        <div role="tab" class="panel-heading">
                          <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#faq1" aria-expanded="true" aria-controls="collapseOne">
                              <div class="icon"><span class="s7-angle-down"></span></div><span class="title">Under Error 352</span></a></h4>
                        </div>
                        <div id="faq1" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse in">
                          <div class="panel-body">Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.</div>
                        </div>
                      </div>
                      <div class="panel">
                        <div role="tab" class="panel-heading">
                          <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#faq2" aria-expanded="false" aria-controls="collapseTwo" class="collapsed">
                              <div class="icon"><span class="s7-angle-down"></span></div><span class="title">Failure platform</span></a></h4>
                        </div>
                        <div id="faq2" role="tabpanel" aria-labelledby="headingTwo" class="panel-collapse collapse">
                          <div class="panel-body">Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.</div>
                        </div>
                      </div>
                      <div class="panel">
                        <div role="tab" class="panel-heading">
                          <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#faq3" aria-expanded="false" aria-controls="collapseThree" class="collapsed">
                              <div class="icon"><span class="s7-angle-down"></span></div><span class="title">Error 404</span></a></h4>
                        </div>
                        <div id="faq3" role="tabpanel" aria-labelledby="headingThree" class="panel-collapse collapse">
                          <div class="panel-body">Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.</div>
                        </div>
                      </div>
                      <div class="panel">
                        <div role="tab" class="panel-heading">
                          <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#faq4" aria-expanded="false" aria-controls="collapseThree" class="collapsed">
                              <div class="icon"><span class="s7-angle-down"></span></div><span class="title">New workstation</span></a></h4>
                        </div>
                        <div id="faq4" role="tabpanel" aria-labelledby="headingThree" class="panel-collapse collapse">
                          <div class="panel-body">Suspendisse nec leo tortor rhoncus tincidunt. Duis sit amet rutrum elit.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="search">
                  <input type="text" placeholder="Search..." name="q"><span class="s7-search"></span>
                </div>
              </div>
              <div id="tab4" role="tabpanel" class="tab-pane ticket am-scroller nano">
                <div class="nano-content">
                  <div class="content">
                    <h2>New Ticket</h2>
                    <form>
                      <div class="form-group send-ticket">
                        <input type="text" placeholder="Title" class="form-control">
                      </div>
                      <div class="form-group send-ticket">
                        <textarea rows="3" placeholder="Write Here..." class="form-control"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary btn-lg">Create Ticket</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    {{--
    <script src="assets/lib/jquery/jquery.min.js" type="text/javascript"></script>
    <script src="assets/lib/jquery.nanoscroller/javascripts/jquery.nanoscroller.min.js" type="text/javascript"></script>
    <script src="assets/js/main.js" type="text/javascript"></script>
    <script src="assets/lib/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="assets/lib/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
    <script src="assets/lib/jquery.nestable/jquery.nestable.js" type="text/javascript"></script>
    <script src="assets/lib/moment.js/min/moment.min.js" type="text/javascript"></script>
    <script src="assets/lib/datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
    <script src="assets/lib/select2/js/select2.min.js" type="text/javascript"></script>
    <script src="assets/lib/bootstrap-slider/js/bootstrap-slider.js" type="text/javascript"></script>
    <script src="assets/js/app-form-elements.js" type="text/javascript"></script> 
    --}}

    {{--  <script src="js/turbolinks.js" data-turbolinks-eval="false"></script>  --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="{!! elixir('assets/lib/jquery.nanoscroller/javascripts/jquery.nanoscroller.min.js') !!}"></script>
    <script src="{!! elixir('js/all.js', '') !!}"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    {{-- <script src="{!! elixir('assets/js/app-form-elements.js') !!}"></script> --}}
    @yield('pagescript')

    <script type="text/javascript">
      //Set Nifty Modals defaults
      $.fn.niftyModal('setDefaults',{
        overlaySelector: '.modal-overlay',
        contentSelector: '.modal-content',
        closeSelector: '.modal-close',
        classAddAfterOpen: 'modal-show',
        classModalOpen: 'modal-open',
        classScrollbarMeasure: 'modal-scrollbar-measure',
        afterOpen: function(){
         $("html").addClass('am-modal-open');
        },
        afterClose: function(){
          $("html").removeClass('am-modal-open');
        }
      });
    </script>

    <script type="text/javascript">
      $(document).ready(function(){
        // initialize the javascript
        App.init();
        //App.masks();  
        //App.wizard();
        //App.formElements();
        
      });

    </script>

    
  </body>
</html>