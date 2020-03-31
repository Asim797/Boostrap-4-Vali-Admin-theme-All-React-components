@extends('layouts.master')

@section('page-title', "Form Custom")

@section('main-content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-edit"></i> Custom Form Elements</h1>
                <p>Customized form elements</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Forms</li>
                <li class="breadcrumb-item"><a href="#">Custom Componants</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="tile">
                    <h3 class="tile-title">Animated Checkbox and Radio Buttons</h3>
                    <!--Radio Button Markup-->
                    <div class="animated-radio-button">
                        <label>
                            <input type="radio"><span class="label-text">Radio Button</span>
                        </label>
                    </div>
                    <!--Checkbox Markup-->
                    <div class="animated-checkbox">
                        <label>
                            <input type="checkbox"><span class="label-text">Checkbox</span>
                        </label>
                    </div>
                    <h4>Disabled state</h4>
                    <div class="animated-radio-button">
                        <label>
                            <input type="radio" disabled=""><span class="label-text">Radio Button</span>
                        </label>
                    </div>
                    <div class="animated-checkbox">
                        <label>
                            <input type="checkbox" disabled=""><span class="label-text">Checkbox</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="tile">
                    <h3 class="tile-title">Animated Toggle Button</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <p><b>Toggle Button</b></p>
                            <div class="toggle">
                                <label>
                                    <input type="checkbox"><span class="button-indecator"></span>
                                </label>
                            </div>
                            <div class="toggle lg">
                                <label>
                                    <input type="checkbox"><span class="button-indecator"></span>
                                </label>
                            </div>
                            <h5>Disabled state</h5>
                            <div class="toggle">
                                <label>
                                    <input type="checkbox" disabled=""><span class="button-indecator"></span>
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p><b>Fliping Toggle Button</b></p>
                            <div class="toggle-flip">
                                <label>
                                    <input type="checkbox"><span class="flip-indecator" data-toggle-on="ON" data-toggle-off="OFF"></span>
                                </label>
                            </div>
                            <h5>Disabled state</h5>
                            <div class="toggle-flip">
                                <label>
                                    <input type="checkbox" disabled=""><span class="flip-indecator" data-toggle-on="ON" data-toggle-off="OFF"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div id="select-two" class="col-md-6"></div>
            <div id="date-picker" class="col-md-6"></div>
            <div id="dropzone-component" class="col-md-6"></div>
        </div>
    </main>
    <script type="text/javascript" src="/js/plugins/bootstrap-datepicker.min.js"></script>
    <script type="text/javascript" src="/js/plugins/select2.min.js"></script>
    <script type="text/javascript" src="/js/plugins/dropzone.js"></script>
    <script type="text/javascript">
        $('#sl').on('click', function(){
            $('#tl').loadingBtn();
            $('#tb').loadingBtn({ text : "Signing In"});
        });

        $('#el').on('click', function(){
            $('#tl').loadingBtnComplete();
            $('#tb').loadingBtnComplete({ html : "Sign In"});
        });

    </script>
    <script type="text/javascript">
        if(document.location.hostname == 'pratikborsadiya.in') {
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-72504830-1', 'auto');
            ga('send', 'pageview');
        }
    </script>
    <script async defer src="{{asset("dist/selectTwo/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/selectTwo/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/datePicker/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/datePicker/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/dropzone/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/dropzone/bundle.js")}}"></script>

@endsection