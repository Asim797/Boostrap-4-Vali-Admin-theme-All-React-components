@extends('layouts.master')

@section('page-title', "Charts")

@section('main-content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-archive"></i> Widgets</h1>
                <p>Widgets to interactively display data</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">UI</li>
                <li class="breadcrumb-item"><a href="#">Widgets</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="widget-small primary"><i class="icon fa fa-users fa-3x"></i>
                    <div class="info">
                        <h4>Users</h4>
                        <p><b>5</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget-small info"><i class="icon fa fa-thumbs-o-up fa-3x"></i>
                    <div class="info">
                        <h4>Likes</h4>
                        <p><b>25</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget-small warning"><i class="icon fa fa-files-o fa-3x"></i>
                    <div class="info">
                        <h4>Uploades</h4>
                        <p><b>10</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget-small danger"><i class="icon fa fa-star fa-3x"></i>
                    <div class="info">
                        <h4>Stars</h4>
                        <p><b>500</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="widget-small primary coloured-icon"><i class="icon fa fa-users fa-3x"></i>
                    <div class="info">
                        <h4>Users</h4>
                        <p><b>5</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget-small info coloured-icon"><i class="icon fa fa-thumbs-o-up fa-3x"></i>
                    <div class="info">
                        <h4>Likes</h4>
                        <p><b>25</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget-small warning coloured-icon"><i class="icon fa fa-files-o fa-3x"></i>
                    <div class="info">
                        <h4>Uploades</h4>
                        <p><b>10</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget-small danger coloured-icon"><i class="icon fa fa-star fa-3x"></i>
                    <div class="info">
                        <h4>Stars</h4>
                        <p><b>500</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" id="chart-card"></div>
            <div class="col-md-6" id="map-card"></div>
        </div>
    </main>

    <script type="text/javascript" src="/js/plugins/jquery.vmap.min.js"></script>
    <script type="text/javascript" src="/js/plugins/jquery.vmap.world.js"></script>
    <script type="text/javascript" src="/js/plugins/jquery.vmap.sampledata.js"></script>

    <script async defer src="{{asset("dist/chatcard/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/chatcard/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/mapcard/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/mapcard/bundle.js")}}"></script>
@endsection