@extends('layouts.master')

@section('page-title', "Charts")

@section('main-content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-pie-chart"></i> Charts</h1>
                <p>Various type of charts for your project</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"><a href="#">charts</a></li>
            </ul>
        </div>
        <div class="row">
            <div id="line-chart" class="col-md-6"></div>
            <div id="bar-chart" class="col-md-6"></div>
            <div id="radar-chart" class="col-md-6"></div>
            <div id="polar-chart" class="col-md-6"></div>
            <div id="pie-chart" class="col-md-6"></div>
            <div id="doughnut-chart" class="col-md-6"></div>
        </div>
    </main>
    <script type="text/javascript" src="/js/plugins/chart.js"></script>
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
    <script async defer src="{{asset("dist/lineChart/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/lineChart/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/barChart/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/barChart/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/radarChart/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/radarChart/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/polarChart/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/polarChart/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/pieChart/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/pieChart/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/doughnutChart/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/doughnutChart/bundle.js")}}"></script>
@endsection