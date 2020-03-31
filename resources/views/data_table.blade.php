@extends('layouts.master')

@section('page-title', "Data Table")

@section('main-content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-th-list"></i> Data Table</h1>
                <p>Table to display analytical data effectively</p>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Tables</li>
                <li class="breadcrumb-item active"><a href="#">Data Table</a></li>
            </ul>
        </div>
        <div id="dataTableComponent"></div>
    </main>
    <script type="text/javascript" src="js/plugins/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="js/plugins/dataTables.bootstrap.min.js"></script>
    <script async defer src="{{asset("dist/datatable/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/datatable/bundle.js")}}"></script>

@endsection