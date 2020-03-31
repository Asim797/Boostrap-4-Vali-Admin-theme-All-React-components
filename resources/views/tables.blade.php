@extends('layouts.master')

@section('page-title', "Tables")

@section('main-content')

    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-th-list"></i> Basic Tables</h1>
                <p>Basic bootstrap tables</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Tables</li>
                <li class="breadcrumb-item active"><a href="#">Simple Tables</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-6" id="simpleTable"></div>
            <div class="col-md-6" id="stripedTable"></div>
            <div class="clearfix"></div>
            <div class="col-md-6" id="borderedTable"></div>
            <div class="col-md-6" id="hoverTable"></div>
            <div class="clearfix"></div>
            <div class="col-md-6" id="condensedTable"></div>
            <div class="col-md-6" id="contextualTable"></div>
            <div class="clearfix"></div>
            <div class="col-md-12" id="responsiveTable"></div>
        </div>
    </main>
    <script async defer src="{{asset("dist/simpletable/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/simpletable/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/stripedtable/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/stripedtable/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/borderedtable/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/borderedtable/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/hovertable/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/hovertable/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/condensedtable/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/condensedtable/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/contextualtable/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/contextualtable/bundle.js")}}"></script>
    <script async defer src="{{asset("dist/responsivetable/vendors~main.bundle.js")}}"></script>
    <script async defer src="{{asset("dist/responsivetable/bundle.js")}}"></script>
@endsection